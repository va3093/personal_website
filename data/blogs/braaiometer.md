---
title: "The braaiometer"
createdAt: "2015-09-21"
categories: ["sideProject", "shipped"]
summary: "A device to measure the temperature of your steaks and alert you when they are ready."
heroImageUrl: "/heroImages/braaiometer.png"
---

## The Context

I grew up in South Africa 🇿🇦. In South Africa braaing is a huge part of the culture. Braaing is essentially cooking meat on a fire. This form of cooking has many different names in many different cultures. However, in South Africa, this is more than just a form of cooking. Is a quintessential cultural activity with many [rules and regulations](https://www.youtube.com/watch?v=OlvGyh8QsMw).

![](/blog_resources/braaiometer/braaivbbq.jpeg)

In the last few years, I have grown in my technical skills and recently have been playing around with BLE technology. As I have become more fluid with writing code and building things I am constantly surrounded by problems that I think I can solve.

## The Problem

One day, I was cooking some meat on our braai and I got distracted by something on the TV and burnt my steaks on the braai. My disappointment soon turned to anger due to the lack of technology available to ensure steaks never get burnt.

This righteous indignation inspired me to come up with a device that would detect when my meat was reaching the optimum temperature and alert me to take it of the braai.

## The Solution

Most of my experience thus far has to do with writing code for iOS. That was good because I would want the alert to come through on my iPhone and as a result, would require an app. The second part required some hardware to actually read the temperature and somehow trigger an alert on my phone. This part was tricky as I had almost 0 experience in the area. However, after some research, it was clear that my best bet was going to be the Arduino with a few extensions. After, a whole weekend of tinkering I came up with this...

![](/blog_resources/braaiometer/braaiometer-closeup.png)

Behold, the Braaiometer.

Here is a pic of it in action.

![](/blog_resources/braaiometer/braaiometer-inaction.png)

And it actually worked. It was pretty incredible. In theory, I could be sitting inside with my feet up and just wait for my phone to tell me when my steaks were ready. However, in reality, I was nervously standing over the braai with my phone convinced something wasn't working.

I ended up braaing so much just so that I could use my braaiometer that I actually became pretty good at knowing when my steaks were ready. This combined with the hassle of setting up my laptop outside with the arduino attached resulted in the braaiometer slowing losing its utility. However, it was a super fun project and one I am really proud of.

## Addendum

**Arduino Code**

```cpp
#include <SPI.h>
#include "Adafruit_MAX31855.h"
#include <LiquidCrystal.h>

int thermoCLK = 3;
int thermoCS = 4;
int thermoDO = 5;

Adafruit_MAX31855 thermocouple(thermoCLK, thermoCS, thermoDO);
LiquidCrystal lcd(7, 8, 9, 10, 11, 12);


void setup() {
  Serial.begin(9600);
  lcd.begin(16, 2);

  lcd.print("MAX31855 test");
  delay(500);
}

void loop() {
   lcd.setCursor(0, 0);
   lcd.print("Int. Temp = ");
   lcd.println(thermocouple.readInternal());
   lcd.print("  ");

   double c = thermocouple.readCelsius();
   lcd.setCursor(0, 1);
   if (isnan(c))
   {
     lcd.print("T/C Problem");
   }
   else
   {
     if (c > 55) {
      tone(13,1000, 100);
     Serial.print("greater than 30");
     }
     lcd.print("C = ");
     lcd.print(c);
     lcd.print("  ");
   }

   delay(100);
}

```

**iOS app**

Code is [On Github](https://github.com/va3093/Braaiometer-ios)
