// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'chart.js/dist/chart';

Rails.start()
Turbolinks.start()
ActiveStorage.start()

require("bootstrap/dist/js/bootstrap")

require('./graphs.js')

// Chart.js
require('chart.js')
// カレンダー
require('flatpickr')
require('flatpickr/dist/l10n/ja')
// カレンダーの色を変更
require("flatpickr/dist/themes/material_blue.css")