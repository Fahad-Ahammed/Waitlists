"use client";
import React, { useEffect, useState } from "react";

type Entry = {
  entryDate: string;
  payer: string;
  status: string;
  email: string;
  phone: string;
  services: string;
  scheduled: string;
};

const Waitlist = () => {
  const data: Entry[] = [
    {
      entryDate: "Sun, 07 Jan 2024 2:42 PM",
      payer: "Theodore T.C. Calvin",
      status: "Lead",
      email: "theodore@gmail.com",
      phone: "+91 966559186876",
      services: "Private Language Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      entryDate: "Sat, 06 Jan 2024 2:42 PM",
      payer: "Hannibal Smith",
      status: "Active",
      email: "hannibalsmith@gmail.com",
      phone: "+91 966578632254",
      services: "Swim beginner for class new Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      entryDate: "Fri, 05 Jan 2024 2:42 PM",
      payer: "April Curtis",
      status: "Inactive",
      email: "aprilcurtis@gmail.com",
      phone: "+91 966558441503",
      services: "Fitness Session",
      scheduled: "Sat, 06 Jan 2024 2:42 PM",
    },
    {
      entryDate: "Thu, 04 Jan 2024 2:42 PM",
      payer: "Michael Knight",
      status: "Active",
      email: "smith@gmail.com",
      phone: "+91 966536605363",
      services: "Aerobics Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      entryDate: "Wed, 03 Jan 2024 2:42 PM",
      payer: "Templeton Peck",
      status: "Active",
      email: "michaelknight@gmail.com",
      phone: "+91 966503534287",
      services: "Boxing Session",
      scheduled: "Fri, 05 Jan 2024 2:42 PM",
    },
    {
      entryDate: "Tue, 02 Jan 2024 2:42 PM",
      payer: "Theodore T.C. Calvin",
      status: "Active",
      email: "hannibalsmith@gmail.com",
      phone: "+91 966530269650",
      services: "Kids play Session",
      scheduled: "Thu, 04 Jan 2024 2:42 PM",
    },
    {
      entryDate: "Mon, 01 Jan 2024 2:42 PM",
      payer: "Michael Knight",
      status: "Lead",
      email: "Mikeh@gmail.com",
      phone: "+91 966566182220",
      services: "Appointment Session",
      scheduled: "Sat, 06 Jan 2024 2:42 PM",
    },
    {
      entryDate: "Sun, 30 Dec 2024 2:42 PM",
      payer: "Mike Torello",
      status: "Lead",
      email: "hannibalsmith@gmail.com",
      phone: "+91 966544628109",
      services: "Exercise Session",
      scheduled: "Sat, 29 Dec 2024 2:42 PM",
    },
    {
      entryDate: "Sat, 29 Dec 2024 2:42 PM",
      payer: "Templeton Peck",
      status: "Lead",
      email: "templeto@gmail.com",
      phone: "+91 966594805058",
      services: "Session Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      entryDate: "Wed, 28 Dec 2024 2:42 PM",
      payer: "Peter Thornton",
      status: "Inactive",
      email: "peterthornton@gmail.com",
      phone: "+91 966558441497",
      services: "Boxing Session",
      scheduled: "Wed, 03 Jan 2024 2:42 PM",
    },
    {
      entryDate: "Sun, 26 Dec 2024 2:42 PM",
      payer: "Lynn Tanner",
      status: "Inactive",
      email: "Lynn@gmail.com",
      phone: "+91 966506424822",
      services: "Fitness Session",
      scheduled: "Mon, 27 Dec 2024 2:42 PM",
    },
    {
      entryDate: "Sun, 25 Dec 2024 2:42 PM",
      payer: "Col. Roderick Decker",
      status: "Lead",
      email: "decker@gmail.com",
      phone: "+91 966558441493",
      services: "Kids play Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      entryDate: "Sat, 24 Dec 2024 2:42 PM",
      payer: "Sarah Connor",
      status: "Active",
      email: "sarahconnor@gmail.com",
      phone: "+91 966512345678",
      services: "Yoga Session",
      scheduled: "Sun, 25 Dec 2024 2:42 PM",
    },
    {
      entryDate: "Fri, 23 Dec 2024 2:42 PM",
      payer: "John Doe",
      status: "Lead",
      email: "johndoe@gmail.com",
      phone: "+91 966523456789",
      services: "Pilates Session",
      scheduled: "Sat, 24 Dec 2024 2:42 PM",
    },
    {
      entryDate: "Thu, 22 Dec 2024 2:42 PM",
      payer: "Jane Smith",
      status: "Inactive",
      email: "janesmith@gmail.com",
      phone: "+91 966534567890",
      services: "CrossFit Session",
      scheduled: "Fri, 23 Dec 2024 2:42 PM",
    },
    {
      entryDate: "Wed, 21 Dec 2024 2:42 PM",
      payer: "Bruce Wayne",
      status: "Active",
      email: "brucewayne@gmail.com",
      phone: "+91 966545678901",
      services: "Weightlifting Session",
      scheduled: "Thu, 22 Dec 2024 2:42 PM",
    },
    {
      entryDate: "Tue, 20 Dec 2024 2:42 PM",
      payer: "Clark Kent",
      status: "Lead",
      email: "clarkkent@gmail.com",
      phone: "+91 966556789012",
      services: "Running Session",
      scheduled: "Wed, 21 Dec 2024 2:42 PM",
    },
    {
      entryDate: "Fri, 02 Dec 2024 2:42 PM",
      payer: "Bruce Wayne",
      status: "Active",
      email: "bruce.wayne@gmail.com",
      phone: "+91 966501234567",
      services: "Meditation Session",
      scheduled: "Sat, 03 Dec 2024 2:42 PM",
    },
    {
      entryDate: "Thu, 01 Dec 2024 2:42 PM",
      payer: "Clark Kent",
      status: "Lead",
      email: "clark.kent@gmail.com",
      phone: "+91 966512345678",
      services: "Martial Arts Session",
      scheduled: "Fri, 02 Dec 2024 2:42 PM",
    },
    {
      entryDate: "Wed, 30 Nov 2024 2:42 PM",
      payer: "Diana Prince",
      status: "Inactive",
      email: "diana.prince@gmail.com",
      phone: "+91 966523456789",
      services: "Dance Session",
      scheduled: "Thu, 01 Dec 2024 2:42 PM",
    },
    {
      entryDate: "Tue, 29 Nov 2024 2:42 PM",
      payer: "Barry Allen",
      status: "Active",
      email: "barry.allen@gmail.com",
      phone: "+91 966534567890",
      services: "Spinning Session",
      scheduled: "Wed, 30 Nov 2024 2:42 PM",
    },
    {
      entryDate: "Mon, 28 Nov 2024 2:42 PM",
      payer: "Arthur Curry",
      status: "Lead",
      email: "arthur.curry@gmail.com",
      phone: "+91 966545678901",
      services: "Zumba Session",
      scheduled: "Tue, 29 Nov 2024 2:42 PM",
    },
    {
      entryDate: "Sun, 27 Nov 2024 2:42 PM",
      payer: "Hal Jordan",
      status: "Inactive",
      email: "hal.jordan@gmail.com",
      phone: "+91 966556789012",
      services: "Strength Training Session",
      scheduled: "Mon, 28 Nov 2024 2:42 PM",
    },
    {
      entryDate: "Sat, 26 Nov 2024 2:42 PM",
      payer: "John Stewart",
      status: "Active",
      email: "john.stewart@gmail.com",
      phone: "+91 966567890123",
      services: "HIIT Session",
      scheduled: "Sun, 27 Nov 2024 2:42 PM",
    },
    {
      entryDate: "Fri, 25 Nov 2024 2:42 PM",
      payer: "Oliver Queen",
      status: "Lead",
      email: "oliver.queen@gmail.com",
      phone: "+91 966578901234",
      services: "Cardio Session",
      scheduled: "Sat, 26 Nov 2024 2:42 PM",
    },
    {
      entryDate: "Thu, 24 Nov 2024 2:42 PM",
      payer: "Shazam",
      status: "Inactive",
      email: "shazam@gmail.com",
      phone: "+91 966589012345",
      services: "Personal Training Session",
      scheduled: "Fri, 25 Nov 2024 2:42 PM",
    },
    {
      entryDate: "Wed, 23 Nov 2024 2:42 PM",
      payer: "Billy Batson",
      status: "Active",
      email: "billy.batson@gmail.com",
      phone: "+91 966590123456",
      services: "Pilates Session",
      scheduled: "Thu, 24 Nov 2024 2:42 PM",
    },
    {
      entryDate: "Tue, 22 Nov 2024 2:42 PM",
      payer: "Victor Stone",
      status: "Lead",
      email: "victor.stone@gmail.com",
      phone: "+91 966501234567",
      services: "Boxing Session",
      scheduled: "Wed, 23 Nov 2024 2:42 PM",
    },
    {
      entryDate: "Mon, 21 Nov 2024 2:42 PM",
      payer: "Dinah Lance",
      status: "Inactive",
      email: "dinah.lance@gmail.com",
      phone: "+91 966512345678",
      services: "Yoga Session",
      scheduled: "Tue, 22 Nov 2024 2:42 PM",
    },
    {
      entryDate: "Sun, 20 Nov 2024 2:42 PM",
      payer: "Roy Harper",
      status: "Active",
      email: "roy.harper@gmail.com",
      phone: "+91 966523456789",
      services: "Running Session",
      scheduled: "Mon, 21 Nov 2024 2:42 PM",
    },
    {
      entryDate: "Sat, 19 Nov 2024 2:42 PM",
      payer: "Wally West",
      status: "Lead",
      email: "wally.west@gmail.com",
      phone: "+91 966534567890",
      services: "Spinning Session",
      scheduled: "Sun, 20 Nov 2024 2:42 PM",
    },
    {
      entryDate: "Fri, 18 Nov 2024 2:42 PM",
      payer: "Kara Danvers",
      status: "Inactive",
      email: "kara.danvers@gmail.com",
      phone: "+91 966545678901",
      services: "CrossFit Session",
      scheduled: "Sat, 19 Nov 2024 2:42 PM",
    },
    {
      entryDate: "Thu, 17 Nov 2024 2:42 PM",
      payer: "John Constantine",
      status: "Active",
      email: "john.constantine@gmail.com",
      phone: "+91 966556789012",
      services: "Weightlifting Session",
      scheduled: "Fri, 18 Nov 2024 2:42 PM",
    },
    {
      entryDate: "Wed, 16 Nov 2024 2:42 PM",
      payer: "Zatanna Zatara",
      status: "Lead",
      email: "zatanna.zatara@gmail.com",
      phone: "+91 966567890123",
      services: "Martial Arts Session",
      scheduled: "Thu, 17 Nov 2024 2:42 PM",
    },
    {
      entryDate: "Tue, 10 Dec 2024 10:30 AM",
      payer: "Harley Quinn",
      status: "Active",
      email: "harley.quinn@gmail.com",
      phone: "+91 966598765432",
      services: "Gymnastics Session",
      scheduled: "Wed, 11 Dec 2024 10:30 AM",
    },
    {
      entryDate: "Mon, 09 Dec 2024 3:15 PM",
      payer: "Selina Kyle",
      status: "Lead",
      email: "selina.kyle@gmail.com",
      phone: "+91 966509876543",
      services: "Kickboxing Session",
      scheduled: "Tue, 10 Dec 2024 3:15 PM",
    },
    {
      entryDate: "Sun, 08 Dec 2024 4:00 PM",
      payer: "Pamela Isley",
      status: "Inactive",
      email: "pamela.isley@gmail.com",
      phone: "+91 966520987654",
      services: "Botanical Training Session",
      scheduled: "Mon, 09 Dec 2024 4:00 PM",
    },
    {
      entryDate: "Sat, 07 Dec 2024 11:00 AM",
      payer: "Edward Nygma",
      status: "Active",
      email: "edward.nygma@gmail.com",
      phone: "+91 966531098765",
      services: "Puzzle Solving Session",
      scheduled: "Sun, 08 Dec 2024 11:00 AM",
    },
    {
      entryDate: "Fri, 06 Dec 2024 2:00 PM",
      payer: "Oswald Cobblepot",
      status: "Lead",
      email: "oswald.cobblepot@gmail.com",
      phone: "+91 966542109876",
      services: "Bird Watching Session",
      scheduled: "Sat, 07 Dec 2024 2:00 PM",
    },
    {
      entryDate: "Thu, 05 Dec 2024 9:45 AM",
      payer: "Jonathan Crane",
      status: "Inactive",
      email: "jonathan.crane@gmail.com",
      phone: "+91 966553210987",
      services: "Fear Management Session",
      scheduled: "Fri, 06 Dec 2024 9:45 AM",
    },
    {
      entryDate: "Wed, 04 Dec 2024 1:30 PM",
      payer: "Bane",
      status: "Active",
      email: "bane@gmail.com",
      phone: "+91 966564321098",
      services: "Strength Training Session",
      scheduled: "Thu, 05 Dec 2024 1:30 PM",
    },
    {
      entryDate: "Tue, 03 Dec 2024 10:15 AM",
      payer: "Talia al Ghul",
      status: "Lead",
      email: "talia.alghul@gmail.com",
      phone: "+91 966575432109",
      services: "Ninjutsu Session",
      scheduled: "Wed, 04 Dec 2024 10:15 AM",
    },
    {
      entryDate: "Mon, 02 Dec 2024 4:45 PM",
      payer: "Ra's al Ghul",
      status: "Inactive",
      email: "ras.alghul@gmail.com",
      phone: "+91 966586543210",
      services: "Leadership Training Session",
      scheduled: "Tue, 03 Dec 2024 4:45 PM",
    },
    {
      entryDate: "Sun, 01 Dec 2024 8:00 AM",
      payer: "Slade Wilson",
      status: "Active",
      email: "slade.wilson@gmail.com",
      phone: "+91 966597654321",
      services: "Combat Training Session",
      scheduled: "Mon, 02 Dec 2024 8:00 AM",
    },
    {
      entryDate: "Sat, 30 Nov 2024 6:30 PM",
      payer: "Victor Fries",
      status: "Lead",
      email: "victor.fries@gmail.com",
      phone: "+91 966508765432",
      services: "Cryogenics Session",
      scheduled: "Sun, 01 Dec 2024 6:30 PM",
    },
    {
      entryDate: "Fri, 29 Nov 2024 7:15 PM",
      payer: "Joker",
      status: "Inactive",
      email: "joker@gmail.com",
      phone: "+91 966519876543",
      services: "Comedy Session",
      scheduled: "Sat, 30 Nov 2024 7:15 PM",
    },
    {
      entryDate: "Thu, 28 Nov 2024 9:00 AM",
      payer: "Lex Luthor",
      status: "Active",
      email: "lex.luthor@gmail.com",
      phone: "+91 966530987654",
      services: "Business Strategy Session",
      scheduled: "Fri, 29 Nov 2024 9:00 AM",
    },
    {
      entryDate: "Wed, 27 Nov 2024 5:30 PM",
      payer: "Vandal Savage",
      status: "Lead",
      email: "vandal.savage@gmail.com",
      phone: "+91 966541098765",
      services: "Historical Analysis Session",
      scheduled: "Thu, 28 Nov 2024 5:30 PM",
    },
    {
      entryDate: "Tue, 26 Nov 2024 3:00 PM",
      payer: "Black Manta",
      status: "Inactive",
      email: "black.manta@gmail.com",
      phone: "+91 966552109876",
      services: "Underwater Combat Session",
      scheduled: "Wed, 27 Nov 2024 3:00 PM",
    },
    {
      entryDate: "Mon, 25 Nov 2024 11:45 AM",
      payer: "Circe",
      status: "Active",
      email: "circe@gmail.com",
      phone: "+91 966563210987",
      services: "Magic Training Session",
      scheduled: "Tue, 26 Nov 2024 11:45 AM",
    },
    {
      entryDate: "Sun, 24 Nov 2024 2:20 PM",
      payer: "Cheetah",
      status: "Lead",
      email: "cheetah@gmail.com",
      phone: "+91 966574321098",
      services: "Speed Training Session",
      scheduled: "Mon, 25 Nov 2024 2:20 PM",
    },
    {
      entryDate: "Sat, 23 Nov 2024 1:00 PM",
      payer: "Scarecrow",
      status: "Inactive",
      email: "scarecrow@gmail.com",
      phone: "+91 966585432109",
      services: "Psychological Warfare Session",
      scheduled: "Sun, 24 Nov 2024 1:00 PM",
    },
    {
      entryDate: "Fri, 22 Nov 2024 3:30 PM",
      payer: "Two-Face",
      status: "Active",
      email: "two-face@gmail.com",
      phone: "+91 966596543210",
      services: "Decision Making Session",
      scheduled: "Sat, 23 Nov 2024 3:30 PM",
    },
    {
      entryDate: "Thu, 21 Nov 2024 11:15 AM",
      payer: "Killer Croc",
      status: "Lead",
      email: "killer.croc@gmail.com",
      phone: "+91 966507654321",
      services: "Strength Training Session",
      scheduled: "Fri, 22 Nov 2024 11:15 AM",
    },
    {
      entryDate: "Wed, 20 Nov 2024 2:45 PM",
      payer: "Deadshot",
      status: "Inactive",
      email: "deadshot@gmail.com",
      phone: "+91 966518765432",
      services: "Sharpshooting Session",
      scheduled: "Thu, 21 Nov 2024 2:45 PM",
    },
    {
      entryDate: "Tue, 19 Nov 2024 9:30 AM",
      payer: "Enchantress",
      status: "Active",
      email: "enchantress@gmail.com",
      phone: "+91 966529876543",
      services: "Magic Training Session",
      scheduled: "Wed, 20 Nov 2024 9:30 AM",
    },
    {
      entryDate: "Mon, 18 Nov 2024 4:00 PM",
      payer: "Captain Cold",
      status: "Lead",
      email: "captain.cold@gmail.com",
      phone: "+91 966540987654",
      services: "Cryogenics Session",
      scheduled: "Tue, 19 Nov 2024 4:00 PM",
    },
    {
      entryDate: "Sun, 17 Nov 2024 10:45 AM",
      payer: "Heat Wave",
      status: "Inactive",
      email: "heat.wave@gmail.com",
      phone: "+91 966551098765",
      services: "Fire Management Session",
      scheduled: "Mon, 18 Nov 2024 10:45 AM",
    },
    {
      entryDate: "Sat, 16 Nov 2024 1:30 PM",
      payer: "Reverse-Flash",
      status: "Active",
      email: "reverse.flash@gmail.com",
      phone: "+91 966562109876",
      services: "Speed Training Session",
      scheduled: "Sun, 17 Nov 2024 1:30 PM",
    },
    {
      entryDate: "Fri, 15 Nov 2024 11:00 AM",
      payer: "Gorilla Grodd",
      status: "Lead",
      email: "gorilla.grodd@gmail.com",
      phone: "+91 966573210987",
      services: "Mental Training Session",
      scheduled: "Sat, 16 Nov 2024 11:00 AM",
    },
    {
      entryDate: "Thu, 14 Nov 2024 3:15 PM",
      payer: "Black Adam",
      status: "Inactive",
      email: "black.adam@gmail.com",
      phone: "+91 966584321098",
      services: "Combat Training Session",
      scheduled: "Fri, 15 Nov 2024 3:15 PM",
    },
    {
      entryDate: "Wed, 13 Nov 2024 9:00 AM",
      payer: "Brainiac",
      status: "Active",
      email: "brainiac@gmail.com",
      phone: "+91 966595432109",
      services: "Artificial Intelligence Session",
      scheduled: "Thu, 14 Nov 2024 9:00 AM",
    },
    {
      entryDate: "Tue, 12 Nov 2024 2:20 PM",
      payer: "Riddler",
      status: "Lead",
      email: "riddler@gmail.com",
      phone: "+91 966506543210",
      services: "Puzzle Solving Session",
      scheduled: "Wed, 13 Nov 2024 2:20 PM",
    },
    {
      entryDate: "Mon, 11 Nov 2024 4:50 PM",
      payer: "Hush",
      status: "Inactive",
      email: "hush@gmail.com",
      phone: "+91 966517654321",
      services: "Stealth Training Session",
      scheduled: "Tue, 12 Nov 2024 4:50 PM",
    },
    {
      entryDate: "Sun, 10 Nov 2024 1:10 PM",
      payer: "Clayface",
      status: "Active",
      email: "clayface@gmail.com",
      phone: "+91 966528765432",
      services: "Shapeshifting Session",
      scheduled: "Mon, 11 Nov 2024 1:10 PM",
    },
    {
      entryDate: "Sat, 09 Nov 2024 3:00 PM",
      payer: "Lady Shiva",
      status: "Lead",
      email: "lady.shiva@gmail.com",
      phone: "+91 966539876543",
      services: "Martial Arts Session",
      scheduled: "Sun, 10 Nov 2024 3:00 PM",
    },
    {
      entryDate: "Fri, 08 Nov 2024 11:40 AM",
      payer: "Solomon Grundy",
      status: "Inactive",
      email: "solomon.grundy@gmail.com",
      phone: "+91 966540987654",
      services: "Strength Training Session",
      scheduled: "Sat, 09 Nov 2024 11:40 AM",
    },
    {
      entryDate: "Thu, 07 Nov 2024 2:55 PM",
      payer: "King Shark",
      status: "Active",
      email: "king.shark@gmail.com",
      phone: "+91 966551098765",
      services: "Aquatic Training Session",
      scheduled: "Fri, 08 Nov 2024 2:55 PM",
    },
    {
      entryDate: "Wed, 06 Nov 2024 1:00 PM",
      payer: "Zod",
      status: "Inactive",
      email: "zod@gmail.com",
      phone: "+91 966562109876",
      services: "Combat Strategy Session",
      scheduled: "Thu, 07 Nov 2024 1:00 PM",
    },
    {
      entryDate: "Tue, 05 Nov 2024 4:00 PM",
      payer: "Bizarro",
      status: "Active",
      email: "bizarro@gmail.com",
      phone: "+91 966573210987",
      services: "Reverse Training Session",
      scheduled: "Wed, 06 Nov 2024 4:00 PM",
    },
    {
      entryDate: "Mon, 04 Nov 2024 9:30 AM",
      payer: "Sinestro",
      status: "Lead",
      email: "sinestro@gmail.com",
      phone: "+91 966584321098",
      services: "Fear Management Session",
      scheduled: "Tue, 05 Nov 2024 9:30 AM",
    },
    {
      entryDate: "Sun, 03 Nov 2024 2:45 PM",
      payer: "Parasite",
      status: "Inactive",
      email: "parasite@gmail.com",
      phone: "+91 966595432109",
      services: "Energy Absorption Session",
      scheduled: "Mon, 04 Nov 2024 2:45 PM",
    },
    {
      entryDate: "Sat, 02 Nov 2024 11:00 AM",
      payer: "Metallo",
      status: "Active",
      email: "metallo@gmail.com",
      phone: "+91 966506543210",
      services: "Cybernetic Enhancement Session",
      scheduled: "Sun, 03 Nov 2024 11:00 AM",
    },
    {
      entryDate: "Fri, 01 Nov 2024 3:15 PM",
      payer: "Doomsday",
      status: "Lead",
      email: "doomsday@gmail.com",
      phone: "+91 966517654321",
      services: "Survival Training Session",
      scheduled: "Sat, 02 Nov 2024 3:15 PM",
    },
    {
      entryDate: "Thu, 31 Oct 2024 10:00 AM",
      payer: "Darkseid",
      status: "Inactive",
      email: "darkseid@gmail.com",
      phone: "+91 966528765432",
      services: "World Domination Session",
      scheduled: "Fri, 01 Nov 2024 10:00 AM",
    },
    {
      entryDate: "Wed, 30 Oct 2024 1:45 PM",
      payer: "Desaad",
      status: "Active",
      email: "desaad@gmail.com",
      phone: "+91 966539876543",
      services: "Interrogation Techniques Session",
      scheduled: "Thu, 31 Oct 2024 1:45 PM",
    },
    {
      entryDate: "Tue, 29 Oct 2024 9:20 AM",
      payer: "Kalibak",
      status: "Lead",
      email: "kalibak@gmail.com",
      phone: "+91 966540987654",
      services: "Warrior Training Session",
      scheduled: "Wed, 30 Oct 2024 9:20 AM",
    },
    {
      entryDate: "Mon, 28 Oct 2024 4:50 PM",
      payer: "Granny Goodness",
      status: "Inactive",
      email: "granny.goodness@gmail.com",
      phone: "+91 966551098765",
      services: "Elite Soldier Training Session",
      scheduled: "Tue, 29 Oct 2024 4:50 PM",
    },
    {
      entryDate: "Sun, 27 Oct 2024 11:10 AM",
      payer: "Steppenwolf",
      status: "Active",
      email: "steppenwolf@gmail.com",
      phone: "+91 966562109876",
      services: "Battle Tactics Session",
      scheduled: "Mon, 28 Oct 2024 11:10 AM",
    },
    {
      entryDate: "Sat, 26 Oct 2024 3:00 PM",
      payer: "Vulko",
      status: "Lead",
      email: "vulko@gmail.com",
      phone: "+91 966573210987",
      services: "Atlantean History Session",
      scheduled: "Sun, 27 Oct 2024 3:00 PM",
    },
    {
      entryDate: "Fri, 25 Oct 2024 10:30 AM",
      payer: "Orm Marius",
      status: "Inactive",
      email: "orm.marius@gmail.com",
      phone: "+91 966584321098",
      services: "Underwater Combat Session",
      scheduled: "Sat, 26 Oct 2024 10:30 AM",
    },
    {
      entryDate: "Thu, 24 Oct 2024 2:20 PM",
      payer: "Mera",
      status: "Active",
      email: "mera@gmail.com",
      phone: "+91 966595432109",
      services: "Hydrokinesis Training Session",
      scheduled: "Fri, 25 Oct 2024 2:20 PM",
    },
    {
      entryDate: "Wed, 23 Oct 2024 4:15 PM",
      payer: "Black Canary",
      status: "Lead",
      email: "black.canary@gmail.com",
      phone: "+91 966506543210",
      services: "Sonic Cry Training Session",
      scheduled: "Thu, 24 Oct 2024 4:15 PM",
    },
    {
      entryDate: "Tue, 22 Oct 2024 9:45 AM",
      payer: "Hawkman",
      status: "Inactive",
      email: "hawkman@gmail.com",
      phone: "+91 966517654321",
      services: "Flight Training Session",
      scheduled: "Wed, 23 Oct 2024 9:45 AM",
    },
    {
      entryDate: "Mon, 21 Oct 2024 3:30 PM",
      payer: "Hawkgirl",
      status: "Active",
      email: "hawkgirl@gmail.com",
      phone: "+91 966528765432",
      services: "Ninth Metal Training Session",
      scheduled: "Tue, 22 Oct 2024 3:30 PM",
    },
    {
      entryDate: "Sun, 20 Oct 2024 8:30 AM",
      payer: "John Stewart",
      status: "Lead",
      email: "john.stewart@gmail.com",
      phone: "+91 966539876543",
      services: "Power Ring Training Session",
      scheduled: "Mon, 21 Oct 2024 8:30 AM",
    },
    {
      entryDate: "Sat, 19 Oct 2024 11:50 AM",
      payer: "Guy Gardner",
      status: "Inactive",
      email: "guy.gardner@gmail.com",
      phone: "+91 966540987654",
      services: "Lantern Corps Training Session",
      scheduled: "Sun, 20 Oct 2024 11:50 AM",
    },
    {
      entryDate: "Fri, 18 Oct 2024 2:10 PM",
      payer: "Kyle Rayner",
      status: "Active",
      email: "kyle.rayner@gmail.com",
      phone: "+91 966551098765",
      services: "Artistry Training Session",
      scheduled: "Sat, 19 Oct 2024 2:10 PM",
    },
    {
      entryDate: "Thu, 17 Oct 2024 9:40 AM",
      payer: "Jessica Cruz",
      status: "Lead",
      email: "jessica.cruz@gmail.com",
      phone: "+91 966562109876",
      services: "Overcoming Fear Session",
      scheduled: "Fri, 18 Oct 2024 9:40 AM",
    },
    {
      entryDate: "Wed, 16 Oct 2024 3:20 PM",
      payer: "Simon Baz",
      status: "Inactive",
      email: "simon.baz@gmail.com",
      phone: "+91 966573210987",
      services: "Weapon Training Session",
      scheduled: "Thu, 17 Oct 2024 3:20 PM",
    },
    {
      entryDate: "Tue, 15 Oct 2024 10:30 AM",
      payer: "Atrocitus",
      status: "Active",
      email: "atrocitus@gmail.com",
      phone: "+91 966584321098",
      services: "Rage Management Session",
      scheduled: "Wed, 16 Oct 2024 10:30 AM",
    },
    {
      entryDate: "Mon, 14 Oct 2024 4:45 PM",
      payer: "Larfleeze",
      status: "Lead",
      email: "larfleeze@gmail.com",
      phone: "+91 966595432109",
      services: "Avarice Training Session",
      scheduled: "Tue, 15 Oct 2024 4:45 PM",
    },
    {
      entryDate: "Sun, 13 Oct 2024 8:00 AM",
      payer: "Saint Walker",
      status: "Inactive",
      email: "saint.walker@gmail.com",
      phone: "+91 966506543210",
      services: "Hope Session",
      scheduled: "Mon, 14 Oct 2024 8:00 AM",
    },
    {
      entryDate: "Sat, 12 Oct 2024 5:30 PM",
      payer: "Indigo-1",
      status: "Active",
      email: "indigo-1@gmail.com",
      phone: "+91 966517654321",
      services: "Compassion Session",
      scheduled: "Sun, 13 Oct 2024 5:30 PM",
    },
    {
      entryDate: "Fri, 11 Oct 2024 11:20 AM",
      payer: "Star Sapphire",
      status: "Lead",
      email: "star.sapphire@gmail.com",
      phone: "+91 966528765432",
      services: "Love Session",
      scheduled: "Sat, 12 Oct 2024 11:20 AM",
    },
    {
      entryDate: "Thu, 10 Oct 2024 3:00 PM",
      payer: "Blue Beetle",
      status: "Inactive",
      email: "blue.beetle@gmail.com",
      phone: "+91 966539876543",
      services: "Scarab Training Session",
      scheduled: "Fri, 11 Oct 2024 3:00 PM",
    },
    {
      entryDate: "Wed, 09 Oct 2024 9:15 AM",
      payer: "Booster Gold",
      status: "Active",
      email: "booster.gold@gmail.com",
      phone: "+91 966540987654",
      services: "Time Travel Session",
      scheduled: "Thu, 10 Oct 2024 9:15 AM",
    },
    {
      entryDate: "Tue, 08 Oct 2024 4:40 PM",
      payer: "Firestorm",
      status: "Lead",
      email: "firestorm@gmail.com",
      phone: "+91 966551098765",
      services: "Nuclear Physics Session",
      scheduled: "Wed, 09 Oct 2024 4:40 PM",
    },
    {
      entryDate: "Mon, 07 Oct 2024 8:55 AM",
      payer: "Captain Atom",
      status: "Inactive",
      email: "captain.atom@gmail.com",
      phone: "+91 966562109876",
      services: "Quantum Physics Session",
      scheduled: "Tue, 08 Oct 2024 8:55 AM",
    },
    {
      entryDate: "Sun, 06 Oct 2024 3:10 PM",
      payer: "The Question",
      status: "Active",
      email: "the.question@gmail.com",
      phone: "+91 966573210987",
      services: "Investigation Techniques Session",
      scheduled: "Mon, 07 Oct 2024 3:10 PM",
    },
    {
      entryDate: "Sat, 05 Oct 2024 10:05 AM",
      payer: "Zatanna",
      status: "Lead",
      email: "zatanna@gmail.com",
      phone: "+91 966584321098",
      services: "Magic Training Session",
      scheduled: "Sun, 06 Oct 2024 10:05 AM",
    },
    {
      entryDate: "Fri, 04 Oct 2024 2:25 PM",
      payer: "Shazam",
      status: "Inactive",
      email: "shazam@gmail.com",
      phone: "+91 966595432109",
      services: "Lightning Training Session",
      scheduled: "Sat, 05 Oct 2024 2:25 PM",
    },
    {
      entryDate: "Thu, 03 Oct 2024 9:50 AM",
      payer: "Raven",
      status: "Lead",
      email: "raven@gmail.com",
      phone: "+91 966506789012",
      services: "Dark Magic Training Session",
      scheduled: "Fri, 04 Oct 2024 9:50 AM",
    },
  ];
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tableLimit, setTableLimit] = useState<number>(10);
  const [tableData, setTableData] = useState<Entry[]>([]);
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3]);
  // const data = [
  //   {
  //     entryDate: "Sun, 07 Jan 2024 2:42 PM",
  //     payer: "Theodore T.C. Calvin",
  //     status: "Lead",
  //     email: "theodore@gmail.com",
  //     phone: "+91 966559186876",
  //     services: "Private Language Session",
  //     scheduled: "Sun, 07 Jan 2024 2:42 PM",
  //   },
  //   {
  //     entryDate: "Sun, 07 Jan 2024 2:42 PM",
  //     payer: " Calvin",
  //     status: "Lead",
  //     email: "theodore@gmail.com",
  //     phone: "+91 966559186876",
  //     services: "Private Language Session",
  //     scheduled: "Sun, 07 Jan 2024 2:42 PM",
  //   },
  // ];
  useEffect(() => {
    const updatePageNumbers = () => {
      const totalEntries = data.length;
      const totalPages = Math.ceil(totalEntries / tableLimit);
      if (totalPages <= 3) {
        setPageNumbers(Array.from({ length: totalPages }, (_, i) => i + 1));
      } else if (currentPage === 1) {
        setPageNumbers([1, 2, 3]);
      } else if (currentPage === totalPages) {
        setPageNumbers([totalPages - 2, totalPages - 1, totalPages]);
      } else {
        setPageNumbers([currentPage - 1, currentPage, currentPage + 1]);
      }
    };

    updatePageNumbers();
    dataGenerator(currentPage, tableLimit);
  }, [currentPage, tableLimit, data.length]);

  const dataGenerator = (page: number, limit: number) => {
    const totalEntries = data.length;
    const totalPages = Math.ceil(totalEntries / limit);

    if (page > totalPages) {
      setCurrentPage(totalPages);
      page = totalPages;
    }

    const tempData: Entry[] = data.slice((page - 1) * limit, page * limit);
    setTableData(tempData);
  };

  const handleInput = (event: any) => {
    const { value } = event.target;
    if (Number(value) > 99) setTableLimit(99);
    else if (Number(value) < 2) setTableLimit(1);
    else setTableLimit(Number(value));
  };

  const increment = () => {
    if (tableLimit == 99) setTableLimit(99);
    else setTableLimit(tableLimit + 1);
  };
  const decrement = () => {
    if (tableLimit == 1) setTableLimit(1);
    else setTableLimit(tableLimit - 1);
  };

  return (
    <div className="overflow-auto bg-[#F8FAFC] md:flex md:h-screen md:flex-col md:px-[8px] md:pb-[24px] md:pt-[8px]">
      <div className="mx-auto grow rounded-[6px] bg-white px-[16px] pb-[12px] pt-[14px] shadow-md max-md:w-[90%] md:w-full">
        <h1 className="mb-[20px] text-[24px] font-[500] leading-[32px] text-[#334155] md:mb-[26px] md:text-[20px] md:leading-[28px]">
          Waitlist
        </h1>
        {/* table starts */}
        {tableData.length > 0 && (
          <div className="relative mb-[12px] overflow-auto rounded-lg border transition-all duration-300 ease-in-out md:mx-auto md:max-h-[500px] md:max-w-[1170px]">
            <table className="relative w-[900px] table-fixed text-left xl:w-full">
              <thead className="sticky top-0 z-[4] border-b bg-[#F8FAFC] py-[8px] text-[12px] capitalize leading-[20px] text-[#64748B]">
                <tr role="row" >
                  <th
                    scope="col"
                    className="w-[14px] py-[12px] pl-[16px] pr-[30px]"
                    role="column header"
                  >
                    <div className="flex w-[14px] items-center">
                      <input
                        id="checkbox-all"
                        type="checkbox"
                        className="relative h-[14px] w-[14px] shrink-0 cursor-pointer appearance-none rounded-[4px] border border-[#E5E7EB] shadow-sm checked:border-0 checked:bg-green-800"
                        aria-label="Select all rows"
                      />
                      <label htmlFor="checkbox-all" className="sr-only">
                        Select all rows
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="w-[182px] pr-[16px] font-[500]" role="column header">
                    <div className="flex w-fit items-center gap-x-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 1 12 12"
                        fill="none"
                      >
                        <path
                          d="M9.5 2H2.5C1.94772 2 1.5 2.44772 1.5 3V10C1.5 10.5523 1.94772 11 2.5 11H9.5C10.0523 11 10.5 10.5523 10.5 10V3C10.5 2.44772 10.0523 2 9.5 2Z"
                          stroke="#64748B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 1V3"
                          stroke="#64748B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 1V3"
                          stroke="#64748B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1.5 5H10.5"
                          stroke="#64748B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>created on</span>
                    </div>
                  </th>
                  <th scope="col" className="w-[152px] pr-[16px] font-[500]" role="column header" >
                    <div className="flex items-center gap-x-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 1 12 12"
                        fill="none"
                      >
                        <path
                          d="M9.5 10.5V9.5C9.5 8.96957 9.28929 8.46086 8.91421 8.08579C8.53914 7.71071 8.03043 7.5 7.5 7.5H4.5C3.96957 7.5 3.46086 7.71071 3.08579 8.08579C2.71071 8.46086 2.5 8.96957 2.5 9.5V10.5"
                          stroke="#64748B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 5.5C7.10457 5.5 8 4.60457 8 3.5C8 2.39543 7.10457 1.5 6 1.5C4.89543 1.5 4 2.39543 4 3.5C4 4.60457 4.89543 5.5 6 5.5Z"
                          stroke="#64748B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>payer</span>
                    </div>
                  </th>
                  <th scope="col" className="w-[136px] pr-[16px] font-[500]" role="column header" >
                    <div className="flex items-center gap-x-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1_18317)">
                          <path
                            d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                            stroke="#64748B"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 6.5C6.27614 6.5 6.5 6.27614 6.5 6C6.5 5.72386 6.27614 5.5 6 5.5C5.72386 5.5 5.5 5.72386 5.5 6C5.5 6.27614 5.72386 6.5 6 6.5Z"
                            stroke="#64748B"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_18317">
                            <rect width="12" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span>status</span>
                    </div>
                  </th>
                  <th scope="col" className="w-[200px] pr-[16px] font-[500]" role="column header" >
                    <div className="flex items-center gap-x-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 4.5H10"
                          stroke="#64748B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 7.5H10"
                          stroke="#64748B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5 1.5L4 10.5"
                          stroke="#64748B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 1.5L7 10.5"
                          stroke="#64748B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>email</span>
                    </div>
                  </th>
                  <th scope="col" className="w-[146px] pr-[16px] font-[500]" role="column header" >
                    <div className="flex items-center gap-x-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 4.5H10"
                          stroke="#64748B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 7.5H10"
                          stroke="#64748B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5 1.5L4 10.5"
                          stroke="#64748B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 1.5L7 10.5"
                          stroke="#64748B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>payer phone</span>
                    </div>
                  </th>
                  <th scope="col" className="w-[200px] pr-[16px] font-[500]" role="column header" >
                    <div className="flex items-center gap-x-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 4.5H10"
                          stroke="#64748B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 7.5H10"
                          stroke="#64748B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5 1.5L4 10.5"
                          stroke="#64748B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 1.5L7 10.5"
                          stroke="#64748B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>services</span>
                    </div>
                  </th>
                  <th scope="col" className="w-[180px] pr-[16px] font-[500]" role="column header" >
                    <div className="flex items-center gap-x-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 1 12 12"
                        fill="none"
                      >
                        <path
                          d="M9.5 2H2.5C1.94772 2 1.5 2.44772 1.5 3V10C1.5 10.5523 1.94772 11 2.5 11H9.5C10.0523 11 10.5 10.5523 10.5 10V3C10.5 2.44772 10.0523 2 9.5 2Z"
                          stroke="#64748B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 1V3"
                          stroke="#64748B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 1V3"
                          stroke="#64748B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1.5 5H10.5"
                          stroke="#64748B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>scheduled</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item: Entry, index: number) => {
                  return (
                    <React.Fragment key={index}>
                      <tr className="border-b bg-white">
                        <td className="w-fit px-[16px]">
                          <div className="flex items-center">
                            <input
                              id="checkbox-table-1"
                              type="checkbox"
                              className="relative h-[14px] w-[14px] shrink-0 cursor-pointer appearance-none rounded-[4px] border border-[#E5E7EB] shadow-sm checked:border-0 checked:bg-green-800"
                            />
                            <label
                              htmlFor="checkbox-table-1"
                              className="sr-only"
                            >
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td className="py-[10px] pr-[16px] text-[12px] font-[500] leading-[20px] text-[#374151]">
                          {item.entryDate}
                        </td>
                        <td className="py-[10px] pr-[16px] text-[12px] font-[500] leading-[20px] text-[#374151]">
                          {item.payer}
                        </td>
                        <td className="py-[10px] pr-[16px]">
                          <div
                            className={`flex w-fit items-center gap-x-[5px] rounded-[16px] bg-[#EFF6FF] px-[7px] text-[12px] font-[500] leading-[20px] ${item.status.toLowerCase() == "active" ? "text-[#15803D]" : item.status.toLowerCase() == "inactive" ? "text-[#334155]" : "text-[#3B82F6]"}`}
                          >
                            <svg
                              width="6"
                              height="6"
                              viewBox="0 0 6 6"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="3"
                                cy="3"
                                r="3"
                                fill={
                                  item.status.toLowerCase() == "active"
                                    ? "#15803D"
                                    : item.status.toLowerCase() == "inactive"
                                      ? "#334155"
                                      : "#3B82F6"
                                }
                              />
                            </svg>
                            <span>{item.status}</span>
                          </div>
                        </td>
                        <td className="truncate py-[10px] pr-[16px] text-[12px] font-[500] leading-[20px] text-[#374151]">
                          {item.email}
                        </td>
                        <td className="truncate py-[10px] pr-[16px] text-[12px] font-[500] leading-[20px] text-[#374151]">
                          {item.phone}
                        </td>
                        <td className="w-[20px] truncate py-[10px] pr-[16px] text-[12px] font-[500] leading-[20px] text-[#374151]">
                          {item.services}
                        </td>
                        <td className="py-[10px] pr-[16px] text-[12px] font-[500] leading-[20px] text-[#374151]">
                          {item.scheduled}
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        {/* table ends */}

        {tableData.length > 0 && (
          <ul className="m-auto items-center justify-between pr-[40px] md:flex md:max-w-[1170px]">
            <li>
              <ul className="flex max-w-[210px] items-center gap-[2px]">
                <li>
                  <span className="text-[14px] leading-[20px] text-[#64748B]">
                    Displaying
                  </span>
                </li>
                <li className="flex items-center justify-center gap-[6px] rounded-[6px] bg-[#F8FAFC] px-[12px] py-[4px]">
                  <div className="max-h-[24px flex items-center">
                    <input
                      className="h-[24px] w-[24px] appearance-none bg-transparent p-[2px] text-[14px] leading-[24px] text-[#334155] outline-none"
                      type="number"
                      id="quantity"
                      name="quantity"
                      maxLength={1}
                      value={tableLimit}
                      onChange={(e) => handleInput(e)}
                      aria-label="Number of rows to display"
                    />
                    <label className="sr-only" htmlFor="quantity">
                      Quanitity
                    </label>
                  </div>
                  <div className="flex flex-col gap-y-[4px]">
                    <button
                      onClick={increment}
                      aria-label="Increase table limit"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="5"
                        viewBox="0 0 8 5"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M0.666626 4.00008L3.99996 0.666748L7.33329 4.00008"
                          stroke="#334155"
                          strokeWidth="0.666667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={decrement}
                      aria-label="Decrease table limit"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="5"
                        viewBox="0 0 8 5"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M0.666626 1L3.99996 4.33333L7.33329 1"
                          stroke="#334155"
                          strokeWidth="0.666667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
                <li className="text-[14px] font-[500] leading-[20px] text-[#64748B]">
                  out of <span className="text-[#171B1F]">{data.length}</span>
                </li>
              </ul>
            </li>
            <li>
              <ul className="bg-green400 flex items-center gap-x-2 px-[8px] py-[6px]">
                <li
                  onClick={() => {
                    setCurrentPage(currentPage - 1);
                    dataGenerator(currentPage - 1, tableLimit);
                  }}
                  className={`${currentPage == 1 ? "pointer-events-none" : "pointer-events-auto"} flex cursor-pointer items-center gap-x-[8px]`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M10 12L6 8L10 4"
                      stroke="#334155"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[12px] leading-[20px] text-[#334155]">
                    Previous
                  </span>
                </li>
                <li>
                  <div className="flex items-center gap-x-[2px] text-[12px] font-[500] leading-[20px] text-[#334155]">
                    {pageNumbers.map((page, index: number) => {
                      return (
                        <button
                          onClick={() => {
                            setCurrentPage(page);
                            dataGenerator(page, tableLimit);
                          }}
                          key={index}
                          className={`${currentPage == page ? "rounded-[6px] border border-[#E2E8F0] bg-[#FFFFFF]" : ""} cursor-pointer rounded-[6px] px-[12px] py-[6px] text-center`}
                        >
                          {page}
                        </button>
                      );
                    })}
                  </div>
                </li>
                <li
                  onClick={() => {
                    setCurrentPage(currentPage + 1);
                    dataGenerator(currentPage + 1, tableLimit);
                  }}
                  className={`${(currentPage - 1) * tableLimit + tableData.length == data.length ? "pointer-events-none" : "pointer-events-auto"} flex items-center gap-x-[8px]`}
                >
                  <span className="cursor-pointer text-[12px] leading-[20px] text-[#334155]">
                    Next
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="#334155"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </li>
              </ul>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Waitlist;
