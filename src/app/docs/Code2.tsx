"use client";

import React from "react";

import { CodeBlock } from "../../components/ui/code-block";

function Code2() {
  const code = `
  #include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>

#define DHTPIN 26
#define DHTTYPE DHT11

// Sensor Pins
#define MQ3_SENSOR 34   // Alcohol Sensor
#define MQ2_SENSOR 35   // Gas Sensor
#define FLAME_SENSOR 32 // Fire Sensor
#define START_BUTTON 27 // Push Button
#define RELAY_PIN 25    // Relay (Engine Control)
#define BUZZER 23       // Buzzer for alarm

// WiFi Credentials
const char* ssid = "your wifi name";
const char* password = "your wifi password";

// ThingSpeak API Key
String thingspeakAPI = "https://api.thingspeak.com/update?api_key=your api key";

// Telegram Bot
String telegramBotToken = "your bot token";
String telegramChatID = "your chat id";

// DHT11 Initialization
DHT dht(DHTPIN, DHTTYPE);

// Function to send alerts
void sendTelegramMessage(String message) {
    HTTPClient http;
    String url = "https://api.telegram.org/bot" + telegramBotToken + "/sendMessage?chat_id=" + telegramChatID + "&text=" + message;
    http.begin(url);
    int httpResponseCode = http.GET();
    http.end();
}

// Function to send data to ThingSpeak
void sendToThingSpeak(float alcohol, float gas, float temp, bool fire, bool engine, bool acPower) {
    HTTPClient http;
    String url = thingspeakAPI 
        + "&field1=" + String(alcohol)
        + "&field2=" + String(gas)
        + "&field3=" + String(temp)
        + "&field4=" + (fire ? "1" : "0")
        + "&field5=" + (engine ? "1" : "0")
        + "&field6=" + (acPower ? "1" : "0");

    http.begin(url);
    int httpResponseCode = http.GET();
    http.end();
}

void setup() {
    Serial.begin(115200);

    // WiFi Connection
    WiFi.begin(ssid, password);
    Serial.print("Connecting to WiFi");
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println(" Connected!");

    // Initialize DHT sensor
    dht.begin();

    // Set Pin Modes
    pinMode(MQ3_SENSOR, INPUT);
    pinMode(MQ2_SENSOR, INPUT);
    pinMode(FLAME_SENSOR, INPUT);
    pinMode(START_BUTTON, INPUT_PULLUP);
    pinMode(RELAY_PIN, OUTPUT);
    pinMode(BUZZER, OUTPUT);

    // Turn Off Engine Initially
    digitalWrite(RELAY_PIN, HIGH); // HIGH means engine OFF (for active-low relay)
    digitalWrite(BUZZER, HIGH);    // Buzzer ON (Indicates Engine is ready)
}

void loop() {
    // Read Sensor Values
    float alcoholLevel = analogRead(MQ3_SENSOR);
    float gasLevel = analogRead(MQ2_SENSOR);
    float temperature = dht.readTemperature();
    bool fireDetected = digitalRead(FLAME_SENSOR) == LOW;  // LOW means fire detected
    bool engineAllowed = true;
    bool acPower = true;

    Serial.println("========= SENSOR READINGS =========");
    Serial.print("Alcohol Level: "); Serial.println(alcoholLevel);
    Serial.print("Gas Level: "); Serial.println(gasLevel);
    Serial.print("Temperature: "); Serial.println(temperature);
    Serial.print("Fire Detected: "); Serial.println(fireDetected ? "YES" : "NO");

    // 🚨 **ALCOHOL DETECTION** 🚨
    if (alcoholLevel > 2000) {  // Adjust threshold based on calibration
        Serial.println("🚫 Alcohol Detected! Engine Disabled.");
        digitalWrite(RELAY_PIN, HIGH);  // Stop Engine (for active-low relay)
        digitalWrite(BUZZER, LOW);      // Buzzer OFF (Indicates Engine Cannot Start)
        sendTelegramMessage("⚠️ Alert: Driver is drunk! Engine cannot start.");
        engineAllowed = false;
    } else {
        Serial.println("✅ No Alcohol Detected. Engine Ready.");
        digitalWrite(RELAY_PIN, LOW);  // Allow Engine Start (for active-low relay)
        digitalWrite(BUZZER, HIGH);    // Buzzer ON (Indicates Engine Ready)
    }

    // 🔥 **FIRE DETECTION** 🔥
    if (fireDetected) {
        Serial.println("🔥 Fire Detected! Turning OFF power.");
        digitalWrite(RELAY_PIN, HIGH);  // Stop Engine (for active-low relay)
        digitalWrite(BUZZER, LOW);      // Buzzer OFF
        sendTelegramMessage("🔥 Fire Alert! AC power turned off.");
        acPower = false;
    }

    //🛢️ **GAS LEAK DETECTION** 🛢️
    if (gasLevel > 40000) {  // Adjust based on calibration
        Serial.println("🚨 Gas Leak Detected! Sending alert.");
        sendTelegramMessage("🚨 Gas Leak Alert! Take action immediately.");
    }

    // 🌡️ **TEMPERATURE MONITORING** 🌡️
    if (temperature > 60) {
        Serial.println("🌡️ High Temperature Detected! Power OFF.");
        digitalWrite(RELAY_PIN, HIGH);  // Stop Engine (for active-low relay)
        digitalWrite(BUZZER, LOW);      // Buzzer OFF
        sendTelegramMessage("🌡️ High Temperature Alert! Power turned off.");
        acPower = false;
    }

    // 🔄 **Send Data to ThingSpeak** 🔄
    sendToThingSpeak(alcoholLevel, gasLevel, temperature, fireDetected, engineAllowed, acPower);

    // Wait before next update
    delay(30000);
}
`;

  return (
    <div className="max-w-3xl mx-auto w-full">
      <CodeBlock
        language="cpp"
        filename="alcoholAndFireDetection.ino"
        highlightLines={[18, 19, 22, 25, 26]}
        code={code}
      />
    </div>
  );
}

export default Code2;
