"use client";

import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

function Code1() {
  const code = `
  #include <Wire.h>
#include <MPU6050_tockn.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

MPU6050 mpu6050(Wire);
const char* ssid = "your wifi name";   // Your WiFi SSID
const char* password = "your wifi password ";  // Your WiFi Password

// ThingSpeak API Key & URL
String thingspeak_api_key = "your thingspeak write channel api key";
String thingspeak_url = "http://api.thingspeak.com/update?api_key=" + thingspeak_api_key;

// Telegram API
String botToken = "your teligram bot token ";
String chatID = "your personal chat id ";

// Gas Sensor Pin
#define GAS_SENSOR_PIN 34  // Change as per your ESP32 board
#define GAS_THRESHOLD 1000  // If gas value > 1000, send an alert

// Reference Values
float ref_accel = 0.0;
float ref_gyro = 0.0;
float ref_tilt = 0.0;  // New: Reference tilt angle
float threshold = 2.5;  // Crash detection threshold

void setup() {
    Serial.begin(115200);
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("Connecting to WiFi...");
    }
    Serial.println("Connected to WiFi!");

    Wire.begin();
    mpu6050.begin();
    mpu6050.calcGyroOffsets(true);

    calculateReference();  // Calculate reference acceleration, gyroscope, and tilt
}

void loop() {
    mpu6050.update();

    float current_accel = sqrt(sq(mpu6050.getAccX()) + sq(mpu6050.getAccY()) + sq(mpu6050.getAccZ()));
    float current_gyro = sqrt(sq(mpu6050.getGyroX()) + sq(mpu6050.getGyroY()) + sq(mpu6050.getGyroZ()));
    int gas_level = analogRead(GAS_SENSOR_PIN);

    float impact_force = abs(current_accel - ref_accel);
    float tilt_angle = atan2(mpu6050.getAccY(), mpu6050.getAccZ()) * 180 / PI;
    float tilt_difference = abs(tilt_angle - ref_tilt);  // New: Compare with reference tilt

    Serial.print("Acceleration: "); Serial.println(current_accel);
    Serial.print("Gas Level: "); Serial.println(gas_level);
    Serial.print("Tilt Angle: "); Serial.println(tilt_angle);

    if (impact_force > threshold) {
        Serial.println("🚨 Crash Detected! Sending Alerts...");
        sendTelegramMessage("🚗 Accident Detected! Impact: " + String(impact_force));
    }

    if (tilt_difference > 45) {  // New: More accurate rollover detection
        Serial.println("⚠️ Vehicle Rollover Detected! Sending Alerts...");
        sendTelegramMessage("⚠️ Rollover Detected! Tilt Angle Difference: " + String(tilt_difference));
    }

    if (gas_level > GAS_THRESHOLD) {
        Serial.println("🔥 Gas Leak Detected! Sending Alerts...");
        sendTelegramMessage("🔥 GAS LEAK ALERT! Sensor Value: " + String(gas_level));
    }

    uploadToThingSpeak(current_accel, gas_level, current_gyro, impact_force, tilt_angle);
    delay(5000);
}

void calculateReference() {
    Serial.println("Calibrating MPU6050...");
    float total_accel = 0.0;
    float total_gyro = 0.0;
    float total_tilt = 0.0;  // New: Sum of initial tilt angles

    for (int i = 0; i < 3; i++) {
        mpu6050.update();
        float acc = sqrt(sq(mpu6050.getAccX()) + sq(mpu6050.getAccY()) + sq(mpu6050.getAccZ()));
        float gyro = sqrt(sq(mpu6050.getGyroX()) + sq(mpu6050.getGyroY()) + sq(mpu6050.getGyroZ()));
        float tilt = atan2(mpu6050.getAccY(), mpu6050.getAccZ()) * 180 / PI;  // New: Tilt calculation

        total_accel += acc;
        total_gyro += gyro;
        total_tilt += tilt;  // New: Add tilt value

        delay(1000);
    }

    ref_accel = total_accel / 3.0;
    ref_gyro = total_gyro / 3.0;
    ref_tilt = total_tilt / 3.0;  // New: Set reference tilt angle
}

void uploadToThingSpeak(float acc, int gas, float gyro, float impact, float tilt) {
    HTTPClient http;
    String url = thingspeak_url + "&field1=" + String(acc) + "&field2=" + String(gas) + 
                 "&field3=" + String(gyro) + "&field4=" + String(impact) + "&field5=" + String(tilt);

    http.begin(url);
    int httpResponseCode = http.GET();
    if (httpResponseCode > 0) {
        Serial.println("✅ Data Sent to ThingSpeak Successfully!");
    } else {
        Serial.println("❌ Error Sending Data to ThingSpeak");
    }
    http.end();
}

void sendTelegramMessage(String message) {
    HTTPClient http;
    String url = "https://api.telegram.org/bot" + botToken + "/sendMessage?chat_id=" + chatID + "&text=" + message;
    
    http.begin(url);
    int httpResponseCode = http.GET();
    if (httpResponseCode > 0) {
        Serial.println("✅ Telegram Alert Sent!");
    } else {
        Serial.println("❌ Error Sending Telegram Message");
    }
    http.end();
}
`;

  return (
    <div className="max-w-3xl mx-auto w-full">
      <CodeBlock
        language="cpp"
        filename="accedentDetection.ino"
        highlightLines={[9, 10, 14, 13, 17, 18]}
        code={code}
      />
    </div>
  );
}

export default Code1;
