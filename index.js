// Copyright (c) 2014-2019, MyMonero.com
//
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
//	conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
//	of conditions and the following disclaimer in the documentation and/or other
//	materials provided with the distribution.
//
// 3. Neither the name of the copyright holder nor the names of its contributors may be
//	used to endorse or promote products derived from this software without specific
//	prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
// THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
// STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
// THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
"use strict";
//
// NOTE: The main downside to using an index.js file like this is that it will pull in all the code - rather than the consumer requiring code module-by-module
// It's of course possible to construct your own stripped-down index.[custom name].js file for, e.g., special webpack bundling usages.
const mytokl_core_js = {};
mytokl_core_js.monero_utils_promise = require("./monero_utils/MyMoneroCoreBridge")(); // NOTE: This is actually a promise. Call .then(function(monero_utils) { }) to actually use
mytokl_core_js.monero_config = require("./monero_utils/monero_config");
mytokl_core_js.monero_txParsing_utils = require("./monero_utils/monero_txParsing_utils");
mytokl_core_js.monero_sendingFunds_utils = require("./monero_utils/monero_sendingFunds_utils");
mytokl_core_js.monero_keyImage_cache_utils = require("./monero_utils/monero_keyImage_cache_utils");
mytokl_core_js.monero_paymentID_utils = require("./monero_utils/monero_paymentID_utils");
mytokl_core_js.monero_amount_format_utils = require("./monero_utils/monero_amount_format_utils");
mytokl_core_js.api_response_parser_utils = require("./hostAPI/response_parser_utils");
//
mytokl_core_js.nettype_utils = require("./cryptonote_utils/nettype");
mytokl_core_js.JSBigInt = require("./cryptonote_utils/biginteger").BigInteger; // so that it is available to a hypothetical consumer's language-bridging web context for constructing string arguments to the above modules
//
module.exports = mytokl_core_js;
