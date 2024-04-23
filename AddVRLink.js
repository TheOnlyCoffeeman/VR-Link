// ==UserScript==
// @name         Add VR Link
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds a VR link to the menu of the specified website
// @author       Your Name
// @match        https://amk.uni-obuda.hu/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create the new list item
    var newItem = document.createElement('li');
    newItem.id = 'menu-item-vr'; // Change the ID to avoid duplicates
    newItem.className = 'menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-14 dropdown';

    // Create the link with the caret
    var newLink = document.createElement('a');
    newLink.href = "https://theonlycoffeeman.itch.io/dino-game-vr";
    newLink.innerHTML = 'VR <span class="caret sparkling-dropdown"></span>';

    // Append the link to the list item
    newItem.appendChild(newLink);

    // Create the new submenu
    var subMenu = document.createElement('ul');
    subMenu.setAttribute('role', 'menu');
    subMenu.className = 'dropdown-menu';
    subMenu.innerHTML = `
        <li id="menu-item-93" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-93"><a href="https://theonlycoffeeman.itch.io/dino-game-vr">Játék!</a></li>
        <li id="menu-item-92" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-92"><a href="https://github.com/TheOnlyCoffeeman/DinoGameVR">Github</a></li>
    `;

    // Find the list item before which you want to insert the new item
    var existingItem = document.getElementById('menu-item-14');

    // Output for debugging
    console.log("Existing Item:", existingItem);

    // Insert the new item and submenu before the existing item
    if (existingItem && existingItem.parentNode) {
        existingItem.parentNode.insertBefore(newItem, existingItem);
        newItem.appendChild(subMenu);
        console.log("VR link and submenu added successfully!");
    } else {
        console.error('Existing item not found');
    }
})();
