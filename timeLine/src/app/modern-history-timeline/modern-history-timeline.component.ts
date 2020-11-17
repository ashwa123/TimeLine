import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-modern-history-timeline',
  templateUrl: './modern-history-timeline.component.html',
  styleUrls: ['./modern-history-timeline.component.css']
})
export class ModernHistoryTimelineComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    $("#filters :checkbox").click(function () {
      $("article").hide();
      $("#filters :checkbox:checked").each(function () {
        $("." + $(this).val()).show();
      });
    });

    $('.tg').click(function () {
      $('.target').toggle('slow');
    });

    $('.tgfilter').click(function () {
      $('.targetfilter').toggle('slow');
    });

    function sticky_relocate() {
      var window_top = $(window).scrollTop();
      var div_top = $('#sticky-anchor').offset().top;
      if (window_top > div_top) {
        $('#sticky').addClass('stick');
      } else {
        $('#sticky').removeClass('stick');
      }
    }
    $(function () {
      $(window).scroll(sticky_relocate);
      sticky_relocate();
    });

    // get all of our list items
    var itemsToFilter = document.querySelectorAll("#itemsToFilter div");

    //setup click event handlers on our checkboxes
    var checkBoxes = document.querySelectorAll(".filterSection li input");

    for (var i = 0; i < checkBoxes.length; i++) {
      checkBoxes[i].addEventListener("click", filterItems, false);
      checkBoxes[i]['checked'] = true;
    }

    // the event handler!
    function filterItems(e) {
      var clickedItem = e.target;

      if (clickedItem.checked == true) {
        hideOrShowItems(clickedItem.value, "hideItem", "showItem");
      } else if (clickedItem.checked == false) {
        hideOrShowItems(clickedItem.value, "showItem", "hideItem");
      } else {
        // deal with the indeterminate state if needed
      }
    }

    // add or remove classes to show or hide our content
    function hideOrShowItems(itemType, classToRemove, classToAdd) {
      for (var i = 0; i < itemsToFilter.length; i++) {
        var currentItem = itemsToFilter[i];

        if (currentItem.getAttribute("data-era") == itemType) {
          removeClass(currentItem, classToRemove);
          addClass(currentItem, classToAdd);
        }

      }
    }

    //
    // Helper functions for adding and removing class values
    //
    function addClass(element, classToAdd) {
      var currentClassValue = element.className;

      if (currentClassValue.indexOf(classToAdd) == -1) {
        if ((currentClassValue == null) || (currentClassValue === "")) {
          element.className = classToAdd;
        } else {
          element.className += " " + classToAdd;
        }
      }
    }

    function removeClass(element, classToRemove) {
      var currentClassValue = element.className;

      if (currentClassValue == classToRemove) {
        element.className = "";
        return;
      }

      var classValues = currentClassValue.split(" ");
      var filteredList = [];

      for (var i = 0; i < classValues.length; i++) {
        if (classToRemove != classValues[i]) {
          filteredList.push(classValues[i]);
        }
      }

      element.className = filteredList.join(" ");
    }
  }

  home(){
    this.router.navigate(['home']);
  }

  about(){
    this.router.navigate(['about']);
  }

  contact(){
    this.router.navigate(['contact'])
  }

  use(){
    this.router.navigate(['use']);
  }

  imagecourtesy(){
    this.router.navigate(['imagecourtesy']);
  }

}
