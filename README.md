import javax.swing.*; // Importing Swing components like JFrame, JButton, JTextField, etc.
import java.io.*; // For FileWriter and IOException

// Main class extending JFrame for GUI
class Fee2 extends JFrame {

    // Declaring input fields
    JTextField t1 = new JTextField(); // Student Name
    JTextField t2 = new JTextField(); // Roll No
    JTextField t3 = new JTextField(); // Contact No
    JTextField t4 = new JTextField(); // Pin Code

    // Text areas for Address and Receipt display
    JTextArea area1 = new JTextArea(); // Address
    JTextArea area2 = new JTextArea(); // Receipt display

    // Gender radio buttons
    JRadioButton rb1 = new JRadioButton("Male");
    JRadioButton rb2 = new JRadioButton("Female");

    // Dropdowns (ComboBoxes) for Institute and Years
    JComboBox<String> cb1 = new JComboBox<>(new String[]{"ICOER", "BSIOTR"}); // Institute
    JComboBox<String> cb2 = new JComboBox<>(new String[]{"2020", "2021", "2022", "2023", "2024"}); // 10th Year
    JComboBox<String> cb3 = new JComboBox<>(new String[]{"2020", "2021", "2022", "2023", "2024"}); // 12th Year

    // Hostel options list
    JList<String> list2 = new JList<>(new String[]{
            "AC Room - 30000",
            "Non-AC Room - 20000",
            "Shared Room - 15000"
    });

    // Grouping radio buttons to ensure only one selection
    ButtonGroup genderGroup = new ButtonGroup();

    // Constructor to set up the GUI
    public Fee2() {
        setTitle("Fee Details Form"); // Frame title
        setSize(900, 900); // Window size
        setLayout(null); // Absolute positioning
        setDefaultCloseOperation(EXIT_ON_CLOSE); // Close operation

        // Form labels
        String[] labels = {
                "Student Name:", "Roll No:", "Gender:", "Institute:",
                "10th Year:", "12th Year:", "Hostel:",
                "Contact No:", "Address:", "Pin Code:"
        };

        // Dynamically placing labels
        int y = 50;
        for (String text : labels) {
            JLabel l = new JLabel(text);
            l.setBounds(50, y, 150, 30);
            add(l);
            y += 50;
        }

        // Positioning input components
        t1.setBounds(180, 50, 200, 30); add(t1);
        t2.setBounds(180, 100, 200, 30); add(t2);

        // Radio buttons for Gender
        rb1.setBounds(180, 150, 80, 30);
        rb2.setBounds(270, 150, 80, 30);
        genderGroup.add(rb1); genderGroup.add(rb2); // Grouping
        add(rb1); add(rb2);

        // ComboBoxes for institute and years
        cb1.setBounds(180, 200, 200, 30); add(cb1);
        cb2.setBounds(210, 250, 100, 30); add(cb2);
        cb3.setBounds(210, 300, 100, 30); add(cb3);

        // Hostel selection list
        list2.setBounds(180, 350, 150, 60); add(list2);

        // Contact No., Address, Pin Code
        t3.setBounds(180, 420, 200, 30); add(t3);
        area1.setBounds(180, 470, 200, 60); add(area1);
        t4.setBounds(180, 550, 200, 30); add(t4);

        // Buttons for Print, Generate Receipt, and Reset
        JButton print = new JButton("Print");
        JButton receipt = new JButton("Generate Receipt");
        JButton reset = new JButton("Reset");

        print.setBounds(50, 600, 100, 30);
        receipt.setBounds(160, 600, 150, 30);
        reset.setBounds(320, 600, 100, 30);

        add(print); add(receipt); add(reset);

        // TextArea for displaying receipt output
        area2.setBounds(600, 230, 250, 180);
        add(area2);

        // Adding logo image (ensure correct path)
        JLabel logoLabel = new JLabel(new ImageIcon("C:\\Users\\Public\\Images\\a.png"));
        logoLabel.setBounds(650, 10, 150, 150);
        add(logoLabel);

        // Print button action: prints area2 content
        print.addActionListener(e -> {
            try {
                if (!area2.print()) {
                    JOptionPane.showMessageDialog(null, "No printer found!");
                }
            } catch (Exception ex) {
                JOptionPane.showMessageDialog(null, "Printing error: " + ex.getMessage());
            }
        });

        // Generate Receipt button action
        receipt.addActionListener(e -> {
            // Building receipt string
            String r = "Student Name: " + t1.getText() +
                    "\nRoll No: " + t2.getText() +
                    "\nHostel: " + list2.getSelectedValue();
            area2.setText(r); // Displaying in area2

            // File chooser to save receipt
            JFileChooser fc = new JFileChooser();
            fc.setDialogTitle("Save Receipt");
            if (fc.showSaveDialog(null) == JFileChooser.APPROVE_OPTION) {
                try (FileWriter w = new FileWriter(fc.getSelectedFile())) {
                    w.write(r);
                    JOptionPane.showMessageDialog(null, "Receipt saved!");
                } catch (IOException ex) {
                    JOptionPane.showMessageDialog(null, "Error: " + ex.getMessage());
                }
            }
        });

        // Reset button action: clears all fields and resets selections
        reset.addActionListener(e -> {
            t1.setText(""); t2.setText(""); t3.setText(""); t4.setText("");
            area1.setText(""); area2.setText("");
            genderGroup.clearSelection();
            cb1.setSelectedIndex(0);
            cb2.setSelectedIndex(0);
            cb3.setSelectedIndex(0);
            list2.clearSelection();
        });

        // Making frame visible
        setVisible(true);
    }

    // Main method to run the application
    public static void main(String[] args) {
        new Fee2();
    }
}

