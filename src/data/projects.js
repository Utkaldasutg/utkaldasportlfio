export const projects = [
  {
    id: "iot-solar-monitoring",
    title: "Low-cost IoT solution for energy monitoring of photovoltaic (PV)",
    description: "Real-time monitoring system for solar panels using IoT sensors to track performance, efficiency, and environmental factors.",
    tech: ["NodeMCU", "INA219", "DHT11", "LDR", "TP4056", "18650 Battery", "Blynk"],
    highlights: ["Real-time dashboard", "Multi-sensor system", "Low-power design"],
    image: "/imges/Low‑cost IoT solution for energy monitoring of photovoltaic (PV)/Low‑cost IoT solution for energy monitoring of photovoltaic (PV) .png",
    gallery: [
      "/imges/Low‑cost IoT solution for energy monitoring of photovoltaic (PV)/Low‑cost IoT solution for energy monitoring of photovoltaic (PV) .png",
      "/imges/Low‑cost IoT solution for energy monitoring of photovoltaic (PV)/Low‑cost IoT solution for energy monitoring of photovoltaic (PV) 1.png",
      "/imges/Low‑cost IoT solution for energy monitoring of photovoltaic (PV)/Low‑cost IoT solution for energy monitoring of photovoltaic (PV) 2.png"
    ],
    content: `
## Abstract
Presently we are entering into a new period of modernisms i.e., Internet of Things (IoT). By using IoT, supervising solar energy can greatly enhance the performance and monitoring of the plant. It is a technique to keep track of the dust assembled on the solar panels to induce the maximum power for active utilization. The amount of output power of the solar panels depends on the radiation hit to the solar cell and all the panels are attached to the sensors which are precisely connected to the central controller which supervises the panels and loads. Thus, users can view the data on their mobile phone of current, voltage and Light intensity and temperature.

## Technical Details
- **NodeMCU**: One of the easy to program and versatile microcontrollers with WIFI chip in build.
- **INA219**: We have used INA219 sensor and connected with NodeMCU in I2C to measure the output current and voltage of the solar panel, it is a 6V, 12-bit, i2c output current/voltage/power monitor.
- **DHT11**: The DHT11 is a basic, ultra low-cost digital temperature and humidity sensor, we have only used the temperature data for this project.
- **LDR**: Light dependent resistor, this sensor helps us to measure the real time Light intensity and take the necessary action if the value changes.
- **TP4056**: The TP4056 is a complete constant-current/constant-voltage linear charger for single cell lithium-ion batteries.
- **18650**: The lithium-ion batteries which have been charged using Solar panel.
- **Solar panel**: Mono or Polycrystalline Silicon solar cells which is manufactured in India, it has 10 cells and the maximum power rating is Vmp x Imp >= 2.5Wp.

## Programming & Implementation
Here we have Included the library of sensor, Microcontroller and Blynk app

\`\`\`cpp
#include <Wire.h>
#include <Adafruit_INA219.h>
#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>
#include "DHT.h"
\`\`\`

We initialized the library function of INA219, defined the dht sensor pin and input the blynk auth token, wifi name and password. So that when we turn on the device it will try to get connected to the wifi.

\`\`\`cpp
Adafruit_INA219 ina219;
#define BLYNK_PRINT Serial
#define dht_dpin 14
DHT dht(dht_dpin, DHTTYPE);
BlynkTimer timer;
char auth[] = "ruD8CdY-sAc_Tm7UH10sLtUbSbT2itcd";

char ssid[] = "OnePlus Nord";
char pass[] = "123456879";
float t;
float h;
\`\`\`

This is the void setup function, the code which needs to be executed once is written here. First we begin the series monitor so that we can observe the value. Then blynk server to connect with internet, A logic has been wrote here to check the working of INA219 sensor and it everything goes well it will print Measuring voltage and current with INA219 ... in serial monitor.

\`\`\`cpp
void setup()
{
  Serial.begin(9600); // Debug console
  Blynk.begin(auth, ssid, pass);
  dht.begin();
  timer.setInterval(2000, sendUptime);
  uint32_t currentFrequency;

  Serial.println("Hello!");
  if (! ina219.begin()) {
    Serial.println("Failed to find INA219 chip");
    while (1) { delay(10); }
  }
  Serial.println("Measuring voltage and current with INA219 ...");
}
\`\`\`

We have performed the initialization of the system. Now we will selectively perform the code which needs to be executed again and again, here initially we have stored the value of data we are getting from the sensor. After that we have performed some mathematics to find the load voltage from bus voltage and shunt voltage which is shown below in the code, then we have printed all the values in the serial monitor.

\`\`\`cpp
void sendUptime()
{
  int sensorValue = analogRead(A0);

  float shuntvoltage = 0;
  float busvoltage = 0;
  float current_mA = 0;
  float loadvoltage = 0;
  float power_mW = 0;

  shuntvoltage = ina219.getShuntVoltage_mV();
  busvoltage = ina219.getBusVoltage_V();
  current_mA = ina219.getCurrent_mA();
  power_mW = ina219.getPower_mW();
  loadvoltage = busvoltage + (shuntvoltage / 1000);

  Serial.print("Bus Voltage:   "); Serial.print(busvoltage); Serial.println(" V");
  Serial.print("Shunt Voltage: "); Serial.print(shuntvoltage); Serial.println(" mV");
  Serial.print("Load Voltage:  "); Serial.print(loadvoltage); Serial.println(" V");
  Serial.print("Current:       "); Serial.print(current_mA); Serial.println(" mA");
  Serial.print("Power:         "); Serial.print(power_mW); Serial.println(" mW");
  Serial.println("");
  delay(1000);
  Serial.println(sensorValue);    // print out the value you read
\`\`\`

This is the last part of code, here we are writing the virtual pin of blink to pull the data from the respective variable container and uploading it to blink server, eventually we can view the data real time in our app.

\`\`\`cpp
  Blynk.virtualWrite(V0, t);
  Blynk.virtualWrite(V1, loadvoltage);
  Blynk.virtualWrite(V2, current_mA);
  Blynk.virtualWrite(V3, sensorValue);

}

void loop()
{
  Blynk.run();
  timer.run();
}
\`\`\`
    `
  },
  {
    id: "velostat-force-sensor",
    title: "Low cost versatile force sensor based on Velostat",
    description: "Built a pressure-sensitive sensor using conductive materials to detect and measure applied forces accurately for robotic and smart consumer applications.",
    tech: ["Arduino", "Velostat", "Copper Strip", "ATMega328P", "STM32"],
    highlights: ["Custom fabrication", "Cost-effective", "Lead System Engineer"],
    image: "/imges/Low cost versatile force sensor based on Velostat/Screenshot 2026-03-01 125327.png",
    gallery: [
      "/imges/Low cost versatile force sensor based on Velostat/Screenshot 2026-03-01 125327.png",
      "/imges/Low cost versatile force sensor based on Velostat/Screenshot 2026-03-01 125345.png"
    ],
    content: `
## Abstract
Low-cost force sensors can be of great interest in robotic and smart consumer applications due to not only to their advantageous cost but to their dimension as well, which enables an advanced mechanical integration. Force-sensing resistors (FSRs) are inexpensive alternatives to load cells. They are suitable for applications where noninvasive devices are needed to measure force, stress, or pressure. I have developed this sensor as a part of an internship with Researchime, USA where I was working as a **Lead System Engineer**.

## Components Used
To develop this sensor we have used:
- **Velostat sheet**: It's pressure-sensitive: squeezing it will reduce the resistance.
- **Copper strip**: We choose copper for experimental purposes because it offers good conductivity. But in the longer run we can also use aluminium which will reduce the cost in manufacturing.
- **Microcontrollers**: Also we have used some wire and Microcontroller like STM32 and ATMEGA328P.

## Force Resistive Sensor Design
The sensor comprises a layered structure:
1. Plastic top layer
2. Copper strip 1
3. Velostat layer
4. Copper strip 2
5. Plastic bottom layer

We are supposed to connect the copper strip 1 to the Analog pin of the Arduino then the copper strip 2 to the gnd. In this code we are reading the analog value of the sensor then converting it to voltage by \`(sensorValue1 * (5.0 / 1023.0));\`. The reason for dividing 5/1023 is that 5 is the input voltage and the arduino has 10 bit ADC so this formula needs to be used to get the voltage value. After that we have written an if-else statement to turn on the digital pin according to difference.

## Programming & Implementation
\`\`\`cpp
int analogPin1 = A1; // for relay
float sensorValue1last1 = 0;

void setup() {
  pinMode(8, OUTPUT); //Connect the relay
  Serial.begin(9600);
}

void loop() {
  int sensorValue1 = analogRead(A1); // relay
  float voltage1 = sensorValue1 * (5.0 / 1023.0);
  //Serial.println(voltage1);
  float diff1 = voltage1 - sensorValue1last1;
  
  Serial.print("Sensor1:");
  Serial.println(diff1);
  sensorValue1last1 = voltage1;
  
  //delay(1000);
  // for the relay
  if (diff1 > 0.04 || diff1 < -0.04) {
      digitalWrite(8, HIGH);
      delay(500);
  } else {
      digitalWrite(8, LOW);
  }
}
\`\`\`

## Recognition
> *"Your work on the integration of an IoT based device with a non-IoT environment through custom sensors is going to fuel our next generation activities. The designs, construction, and research work that was done by you are significant. Your activities at our firm as a Lead Systems Engineer were highly appreciable. It was a pleasure knowing you and working with you."*
> — **Dr. Shashaanka Ashili**, CEO at Researchime (ASX Partners)
    `
  },
  {
    id: "bluetooth-radiation-analyzer",
    title: "Low-Cost Experimental Setup for Antenna Radiation Pattern Measurement Of Bluetooth Using Hc-05 And Smartphone",
    description: "Measured Bluetooth radiation patterns and visualized signal strength mappings in a 3D space using Python.",
    tech: ["Arduino", "HC-05", "Python", "Matplotlib"],
    highlights: ["Data visualization", "Signal processing", "IEEE Internship"],
    image: "/imges/Low-Cost Experimental Setup for Antenna Radiation Pattern Measurement Of Bluetooth Using Hc-05 And Smartphone/hardware connection.png",
    gallery: [
      "/imges/Low-Cost Experimental Setup for Antenna Radiation Pattern Measurement Of Bluetooth Using Hc-05 And Smartphone/hardware connection.png",
      "/imges/Low-Cost Experimental Setup for Antenna Radiation Pattern Measurement Of Bluetooth Using Hc-05 And Smartphone/step1.png",
      "/imges/Low-Cost Experimental Setup for Antenna Radiation Pattern Measurement Of Bluetooth Using Hc-05 And Smartphone/step 2 .png"
    ],
    content: `
## Abstract
Wireless communications play a vital role in our day to day life. We also use them in making DIY Arduino based projects, understanding the properties of the radio propagation channel, the antennas and their interplay is very important. This project aims to evaluate the performance of the HC-05 Bluetooth module antenna radiation pattern by using a low-cost technique and study the radiation pattern using the polar curve in python. Bluetooth hc05 is chosen because it is cheap and everyone uses it in their DIY project. 

To assess connection among the predefined sensor positions in the plane, the RSSI (received signal strength indicator) measurement is conducted by using the HC-05 Bluetooth module as the transmitter and Android smartphone as the receiver. In the real world, the RSSI of the Bluetooth module should be carefully considered because the signal reception changes from time to time due to noise. So we considered four values of RSSI then took the mean average. The RSSI values are normalized by using the highest value then those values are plotted in Polar curve in python by using Math, Matplotlib and CSV library in a GUI. I did this project as a part of Internship with **IEEE AP-MTT IIT kgp section**.

## Working principle
A Bluetooth module HC-05 is a high speed low powered wireless technology link that is connected. It is a specification (IEEE 802.15.1) for the use of low power radio communications to link phones over short distances without wires. Wireless signals transmitted with Bluetooth cover short distances, typically up to 30 feet (10 meters). It is achieved by embedded low-cost transceivers into the devices. It supports on the frequency band of 2.45GHz and can support up to 721Kbps along with three voice channels.

## Hardware and Software Required
- HC-05 Bluetooth Module
- Arduino Uno
- Arduino IDE (1.0.6V)
- Bluetooth RSSI Analyser app from NextGen Technology Ltd.

## Hardware Connections
As we know that VCC and GND of the bluetooth module goes to VCC and GND of Arduino. The TXD pin goes to RXD pin of Arduino and RXD pin goes to TXD pin of Arduino i.e(digital pin 0 and 1). The user can use the on board Led. But here, Led is connected to digital pin 12 externally for betterment of the process.

![Hardware Connection](/imges/Low-Cost%20Experimental%20Setup%20for%20Antenna%20Radiation%20Pattern%20Measurement%20Of%20Bluetooth%20Using%20Hc-05%20And%20Smartphone/hardware%20connection.png)

## Procedures
**CONSTRUCTION**
The components we used to construct the measurement area are as below:
1. Wooden scale
2. Thread
3. Chalk

### STEP 1
First, I have drawn 3 circles of radius 2 meters, 1 meter and 0.5-meter using a scale, thread and chalk as shown in figure 3.2

![Step 1](/imges/Low-Cost%20Experimental%20Setup%20for%20Antenna%20Radiation%20Pattern%20Measurement%20Of%20Bluetooth%20Using%20Hc-05%20And%20Smartphone/step1.png)

### STEP 2
I have drawn 2 straight lines from North to South and East to West, measured the circumference of 1 quadrant using thread, dividing the circumference into 8 parts which eventually helps me to get each 10° angle.

![Step 2](/imges/Low-Cost%20Experimental%20Setup%20for%20Antenna%20Radiation%20Pattern%20Measurement%20Of%20Bluetooth%20Using%20Hc-05%20And%20Smartphone/step%202%20.png)

### STEP 3
I placed the HC-05 Bluetooth Module(Transmitter) in the center at λ/2 height i.e 62.5 mm and my cell phone(receiver) at λ/2 height i.e 62.5 mm

![Step 3](/imges/Low-Cost%20Experimental%20Setup%20for%20Antenna%20Radiation%20Pattern%20Measurement%20Of%20Bluetooth%20Using%20Hc-05%20And%20Smartphone/step3.png)
![Step 3.1](/imges/Low-Cost%20Experimental%20Setup%20for%20Antenna%20Radiation%20Pattern%20Measurement%20Of%20Bluetooth%20Using%20Hc-05%20And%20Smartphone/step3.1.png)

### STEP 4
I placed my cell phone at 0° on a 2-meter circle first, then took 4 readings on the excel sheet of RSSI from the mobile app. Similarly I took the reading at each angle then repeated the same steps for 1 meter and 0.5 meter circle.

![Step 4](/imges/Low-Cost%20Experimental%20Setup%20for%20Antenna%20Radiation%20Pattern%20Measurement%20Of%20Bluetooth%20Using%20Hc-05%20And%20Smartphone/step4%20.png)

### STEP 5
I took the average of 4 RSSI values which I got on a single point/angle. After that normalize it with the highest value.
Then I had values something like this

![Step 5](/imges/Low-Cost%20Experimental%20Setup%20for%20Antenna%20Radiation%20Pattern%20Measurement%20Of%20Bluetooth%20Using%20Hc-05%20And%20Smartphone/step%205.png)

### STEP 6
I used the math library to do calculation, matplotlib for plotting the polar curves, csv for reading the data from a csv file, also I used tkinter to make the GUI.

### STEP 7
First we need to run the python code in the compiler then a GUI will pop up where we need to select the csv file, after selecting the csv file close the GUI window, then we would be able to see the polar plotting.

![Step 7](/imges/Low-Cost%20Experimental%20Setup%20for%20Antenna%20Radiation%20Pattern%20Measurement%20Of%20Bluetooth%20Using%20Hc-05%20And%20Smartphone/step7.png)
![Step 7.1](/imges/Low-Cost%20Experimental%20Setup%20for%20Antenna%20Radiation%20Pattern%20Measurement%20Of%20Bluetooth%20Using%20Hc-05%20And%20Smartphone/step%207.1.png)

### Certification
![Certificate](/imges/Low-Cost%20Experimental%20Setup%20for%20Antenna%20Radiation%20Pattern%20Measurement%20Of%20Bluetooth%20Using%20Hc-05%20And%20Smartphone/certificate.jpeg)
    `
  },
  {
    id: "water-purifier-biochar",
    title: "Low cost water purifier using nanocomposite of biochar and tea waste",
    description: "Innovative and eco-friendly water purification system utilizing nanocomposites of biochar and tea waste to remove heavy metal contaminants.",
    tech: ["Biochar", "Tea Waste", "Nanocomposites", "Filtration"],
    highlights: ["Eco-friendly", "Cost-effective", "Heavy metal removal"],
    image: "/imges/other projects/Low cost water purifier using nanocomposite of biochar and tea waste/Screenshot 2026-03-01 131001.png",
    gallery: [
      "/imges/other projects/Low cost water purifier using nanocomposite of biochar and tea waste/Screenshot 2026-03-01 131001.png",
      "/imges/other projects/Low cost water purifier using nanocomposite of biochar and tea waste/Screenshot 2026-03-01 131006.png",
      "/imges/other projects/Low cost water purifier using nanocomposite of biochar and tea waste/Screenshot 2026-03-01 131010.png"
    ],
    content: `
## Abstract
Presently we are facing a lot of challenges regarding access to pure drinking water. One of the main causes of water pollution is the presence of heavy metals such as Fluoride, Iron, and Arsenic in groundwater sources. To combat this issue, we have developed a highly efficient, low-cost water purifier system.

## Innovation
This product utilizes a specially synthesized **Nanocomposite of Biochar and Tea Waste**. Conventional filters often struggle to remove heavy metal ions effectively without using expensive reverse osmosis (RO) systems. By leveraging the natural adsorption properties of biochar combined with the chemical binding capabilities of tea waste nanocomposites, this filter acts as a highly effective sponge for toxic impurities.

## The Process
1. **Material Collection:** Raw tea waste and biomass for biochar.
2. **Synthesis:** Creation of the nanocomposite material through a specialized chemical process.
3. **Integration:** Packing the composite into a layered filtration cartridge.
4. **Filtration:** As contaminated water passes through, the nanocomposite traps heavy metal ions, resulting in clean, drinkable water.

![Nanocomposite Filter Process](/imges/other%20projects/Low%20cost%20water%20purifier%20using%20nanocomposite%20of%20biochar%20and%20tea%20waste/Screenshot%202026-03-01%20131006.png)
![Filtration Results](/imges/other%20projects/Low%20cost%20water%20purifier%20using%20nanocomposite%20of%20biochar%20and%20tea%20waste/Screenshot%202026-03-01%20131010.png)
        `
  },
  {
    id: "robot-covidrakshak",
    title: "Robot - COVIDRAKSHAK",
    description: "A remote-controlled assistance robot designed during the pandemic to deliver medicines and food to patients, minimizing human contact.",
    tech: ["Arduino", "Motor Drivers", "Wireless Communication", "Robotics"],
    highlights: ["Healthcare assist", "Remote controlled", "Rapid prototyping"],
    image: "/imges/other projects/Robot - COVIDRAKSHAK/Screenshot 2026-03-01 131024.png",
    gallery: [
      "/imges/other projects/Robot - COVIDRAKSHAK/Screenshot 2026-03-01 131024.png"
    ],
    content: `
## Overview
**COVIDRAKSHAK** is a remotely controlled robotic vehicle that was explicitly developed to assist medical professionals and frontline workers during the COVID-19 pandemic. 

## Key Features
- **Contactless Delivery:** The robot can carry food, water, and essential medicines directly into isolation wards, completely eliminating the need for nurses and doctors to expose themselves to infected patients for routine deliveries.
- **Remote Operation:** It operates via a robust wireless remote control interface, allowing operators to navigate the robot from a safe distance.
- **Agile Mobility:** Equipped with high-torque motors and differential steering to easily navigate hospital corridors and tight ward spaces.

## Impact
By taking over the routine delivery tasks in hazardous environments, COVIDRAKSHAK significantly reduces the consumption of PPE kits and lowers the overall viral exposure risk for healthcare personnel.

![COVIDRAKSHAK Robot](/imges/other%20projects/Robot%20-%20COVIDRAKSHAK/Screenshot%202026-03-01%20131024.png)
        `
  },
  {
    id: "solar-grass-cutter",
    title: "Solar based Autonomous Grass Cutter using Ultrasonic Sensor",
    description: "An eco-friendly, autonomous lawnmower powered entirely by solar energy and guided by ultrasonic obstacle avoidance.",
    tech: ["Arduino UnO", "Ultrasonic Sensors", "Solar Panel", "DC Motors"],
    highlights: ["Autonomous navigation", "100% Green Energy", "Smart Obstacle Avoidance"],
    image: "/imges/other projects/Solar based Autonomous Grass Cutter using Ultrasonic Sensor/Screenshot 2026-03-01 131030.png",
    gallery: [
      "/imges/other projects/Solar based Autonomous Grass Cutter using Ultrasonic Sensor/Screenshot 2026-03-01 131030.png"
    ],
    content: `
## Abstract
Lawn maintenance typically relies on gasoline-powered mowers that contribute to noise pollution and carbon emissions. This project introduces a completely green alternative: the **Solar based Autonomous Grass Cutter**.

## Working Principle
This smart rover is equipped with a solar panel mounted on its roof. It continuously charges a standard battery during operation, allowing for extended, eco-friendly runtime.

- **Autonomous Navigation:** Using an array of **Ultrasonic Sensors**, the robot constantly pings its environment. 
- **Obstacle Avoidance:** When a wall, rock, or human is detected within a certain threshold, the onboard microcontroller (Arduino) instantly halts the cutting blades, calculates an evasion angle, and steers the rover away safely before resuming mowing.

## Advantages
- **Zero Operating Costs:** Powered entirely by the sun.
- **Labor Saving:** Fully autonomous operation requires no human supervision.
- **Safe:** Immediate blade stoppage and redirection upon detecting obstacles.

![Solar Grass Cutter Rover](/imges/other%20projects/Solar%20based%20Autonomous%20Grass%20Cutter%20using%20Ultrasonic%20Sensor/Screenshot%202026-03-01%20131030.png)
        `
  }
];
