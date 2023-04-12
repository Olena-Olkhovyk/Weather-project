# Weather-project
>Weather-project is a web application that enables users all over the world to check the current weather of a particular city by typying the name of the city and clicking on search.
View the live web application [here] (https://olena-olkhovyk.github.io/Weather-project/)
![mockup](./docs/mockup.PNG)
## Features

### Existion Features
* Input field
   * The input field of the web application allows users to type in a city they want to search.
   * This field is validated and therefire cannot be submited empty or with an inappropriate data.
   * It has a placeholder text that further informs the user exactly where and what to type in.
   * It also features a hover effect that tells the user beforehand that they are on the field.

![Input field](./docs/input%20field.PNG) 

* Search button
   * Button allows users to submit the typed in city in order for them to get the weather of that city displayed.

![Search button](./docs/search%20btn.PNG)

* Current weather display section
   * This section of the application displays the typed in city, the current date and its corresponding weather description, weather description icon, temperature, pressure, humidity and wind speed.
   * In order not to display emptyness or unreal data, it is by default set to the city of Kyiv and will change whenever another city is keyed in.

![Current weather display section](./docs/display.PNG)

* Temperature unit conversion
   * This part of the web application allows the user to convert temperature units from the default celsius unit to fahrenheit and viceversa just by clicking on the desired unit.
   * This helps the user to save the time of trying to manually convert units.

![Temperature unit conversions](./docs/units.PNG)

## Design

### Wireframes
<br>
Desktop version
<br>

![Desktop Version](./docs/desktop.PNG)

<br>
Tablet Version
<br>

![Tablet Version](./docs/ipad.PNG)

<br>
Phone Version
<br>

![Phone Version](./docs/phone.PNG)

## Testing

### Responsiveness

The web application was tested to ensure responsiveness on screen sizes of 320px and above as defined in [WCAG 2.1 Reflow criteria for responsive design](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html#top) on Safari, Chrome, Edge, Firefox and Opera browsers.

Steps to test:

1. Open browser and navigate to [Weather-project](https://olena-olkhovyk.github.io/Weather-project/)
2. Open the developer tools by right clicking or tapping the F12 key and click on inspect.
3. Set to responsive and decrease width to 320px
4. Set the zoom to 50%
5. Click and drag the responsive window to maximum width

* Expected

The web application is responsive on all screen sizes and no icons or elements are pixelated or stretched. 
No horizontal scroll is present. No elements overlap.

* Actual

The web application works exactly as expected.

The web application was opened on the following devices and no responsive issues were found;

- Huawei mipad 10
- Iphone 10
- Iphone 12 Xs max
- Iphone 12
- Iphone 13
- Iphone 6S plus
- Xiomi Redme 11 pro
- Samsung A 12
- Samsung Galaxy 20
- Samsung Galaxy Tab S7
- Infinix Hot 10
- Infinix Hot 12
- Asus Sonicmaster
- Hp EliteBook 8440p
- Hp laptop 14s
- Mcbook Retina
