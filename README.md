import javax.swing.*;
import java.awt.event.*;

public class StudentResult {
    public static void main(String[] args) {
        // Main Frame
        JFrame frame = new JFrame("Student Marks Entry");
        frame.setSize(300, 300);
        frame.setLayout(null);

        import javax.swing.*;
import java.awt.event.*;

public class StudentResult {
    public static void main(String[] args) {
        // Main Frame
        JFrame frame = new JFrame("Student Marks Entry");
        frame.setSize(300, 300);
        frame.setLayout(null);

        // Labels and TextFields for 3 subjects
        JLabel l1 = new JLabel("Subject 1:");
        l1.setBounds(20, 30, 80, 20);
        JTextField t1 = new JTextField();
        t1.setBounds(100, 30, 100, 20);

        JLabel l2 = new JLabel("Subject 2:");
        l2.setBounds(20, 60, 80, 20);
        JTextField t2 = new JTextField();
        t2.setBounds(100, 60, 100, 20);

        JLabel l3 = new JLabel("Subject 3:");
        l3.setBounds(20, 90, 80, 20);
        JTextField t3 = new JTextField();
        t3.setBounds(100, 90, 100, 20);

        JButton submit = new JButton("Show Result");
        submit.setBounds(70, 130, 130, 30);

        // Add components to frame
        frame.add(l1); frame.add(t1);
        frame.add(l2); frame.add(t2);
        frame.add(l3); frame.add(t3);
        frame.add(submit);

        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);

        // ActionListener for Button
        submit.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                int m1 = Integer.parseInt(t1.getText());
                int m2 = Integer.parseInt(t2.getText());
                int m3 = Integer.parseInt(t3.getText());

                int total = m1 + m2 + m3;
                double average = total / 3.0;
                String result = (average >= 40) ? "Pass" : "Fail";

                // Show result in new window
                JFrame resultFrame = new JFrame("Result");
                resultFrame.setSize(250, 200);
                resultFrame.setLayout(new FlowLayout());

                JLabel resultLabel = new JLabel("Total: " + total + ", Average: " + average + ", Result: " + result);
                resultFrame.add(resultLabel);

                resultFrame.setVisible(true);
            }
        });
    }
}
