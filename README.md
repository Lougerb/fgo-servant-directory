# Fate Grand Order: Servant Directory
*A servant directory base in-game's data*

## Disclaimer:
- I do not own the most of the assets use here nor the API of the servants.
- Most assets used here are from DelightWorks' [Fate/Grand Order](https://fate-go.us/)
- You can visit API owner's site [here](https://atlasacademy.io/)
- This project is for portfolio purposes only


## Description: 
- This project's focus is to deliver servant's information for player's needs for their next stratigic gameplay against tough opponents and waves

## Goal:
- To grab data from API and display in a very informative way in order to meet player's needs

## What did I do?:
- I searched some free API of this game, very at least a fan-made as long as it can deliver the data
- I use Async method to grab data
- Create a function that can display the data I get
- The **Display function** will generate a Servant Card element with the servant's portrait, name, rarity and class.
- Once I displayed all the servant's card, the next step will be the modals
- I created a **Modal function** then called it inside the Display Function in order when player click a servant's card, they will see that servant's information
- Once Display and Modal functions are completed, the next step is creating a navigation bar with filter function
- I created a nav bar with all the class icons in it and put a search bar on it if player want to search some specific servant
- To make a filter working with class icons.
- I made sure that every div elements of every servant has their own class selector, for example. If Altria is a saber, then inside the div element will have a class of saber.
- In this way, I had to modify Display function again, adding their class on their div elements when generating their card.
- After that, I made a selector **hideServant** to hide servant when is not selected. 
- Then I made a Filter function called **filterServants** to which whenever a player click a Class icon, all servant that isn't equal to that Class icon will be hidden.
- Then I added that function into the event listener of the class icon's group name.
- After Class' icon functions, I made a function for search bar.
- Search bar function is to whenever player type that matches the servant's name, will automatically display that servant and hide servant that isn't match.
- Finally, adding a media query for mobile user.
- Re-styling navigation bar but only the class icons.
- Re-styling Servant's Modals and cards.
