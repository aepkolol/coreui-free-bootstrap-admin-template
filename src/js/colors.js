/* global rgbToHex */
import $ from 'jquery'

/**
 * --------------------------------------------------------------------------
 * CoreUI Free Boostrap Admin Template (v2.1.12): colors.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
var waffleEnd = new Date('May 24, 19 04:20')
$('.theme-color').each(function () {
  const Color = $(this).css('backgroundColor')
  $(this).parent().append(`
    <table class="w-100">
      <tr>
        <td class="text-muted">Time Remaining:</td>
        <td class="font-weight-bold">${Math.floor((Math.random() * 10) + 1)} hours</td>
      </tr>
      <tr>
        <td class="text-muted">Open Slots:</td>
        <td class="font-weight-bold">${Math.floor((Math.random() * 10) + 1)}</td>
      </tr>
    </table>
  `)
})
