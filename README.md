---
author: "WEICHENG YANG"
title: "psychiatric health service in Kaohsiung"
category: programming

---

## Kaohsiung Psychiatric Health Resource Map

- data resource: kaohsiung city government open-data
  - Health bureau does not provide API, all data must be processed from pdf by human
  - [health resource system: the UI sucks](http://khd.kcg.gov.tw/Main.aspx?sn=986)
  - [counselling and psychotherapy service: pdf](http://data.kaohsiung.gov.tw/Opendata/DetailList.aspx?CaseNo1=AG&CaseNo2=42&Lang=C&FolderType=O)
  - [drug rehabilitation facilities](http://data.kaohsiung.gov.tw/Opendata/DetailList.aspx?CaseNo1=AG&CaseNo2=43&Lang=C&FolderType=O)
  - [psychiatric nursing home](http://data.kaohsiung.gov.tw/Opendata/DetailList.aspx?CaseNo1=AG&CaseNo2=44&Lang=C&FolderType=O)
  - [psychiatric rehabilitation facility](http://data.kaohsiung.gov.tw/Opendata/DetailList.aspx?CaseNo1=AG&CaseNo2=45&Lang=C&FolderType=O)

- data form:
  - should present in json  
  - contain keys:  
    - name: name of the facility
    - type: type of the facility
    - address: address of the facility
- functions (should have):
  - mainpage: a map that centered on Kaohsiung
    - mainpage is responsive to screensize
    - mainpage contains check up forms
      - can check up resources type we wanted to lookup
      - resources checked up is shown on the map
      - when checked, the address and phone number is shown below the mp
      - (on phone): can directly call the facility if pressed the phone number link
- functions (could have):
  - a search form, can locate map to input address
  - choose type of resource and will list resource by distance to the input address
  - use to choose the resource suitable for user

I
