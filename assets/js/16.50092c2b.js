(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{176:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p"),t._m(1),s("p"),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),s("p",[t._v("There are a few throttle limits built into the Daemon to keep people from causing issues with data volume and CPU usage.\nUnder normal circumstances users should not encounter these limits. You might see the occasional data throttling\nwarning while starting a server or when there is a sudden spike in data output.")]),t._v(" "),s("p",[t._v("If you're seeing more servers than you expected being killed as a result of the Daemon throttler, you can make\nadjustments to the settings below. Please note the configs below are in JSON dot-notation and should be expanded\nout into a normal JSON object.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("This daemon ships with a very strict security configuration designed to limit access to the host system, and mitigate\na large range of potential attack vectors. However, some users might need to tweak these settings, or are running on\na private instance and are willing to decrease some of the security measures.")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),s("table",[t._m(20),t._v(" "),s("tbody",[t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),s("tr",[t._m(28),t._v(" "),s("td",[t._v("array")]),t._v(" "),s("td",[t._v("An array of linux capabilities to drop from the container (in addition to ones "),s("a",{attrs:{href:"https://docs.docker.com/engine/security/security/#linux-kernel-capabilities",target:"_blank",rel:"noopener noreferrer"}},[t._v("dropped by docker already"),s("OutboundLink")],1),t._v(". A listing of the default array is below.")])])])]),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"additional-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#additional-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Additional Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#output-throttles"}},[this._v("Output Throttles")])]),e("li",[e("a",{attrs:{href:"#custom-network-interfaces"}},[this._v("Custom Network Interfaces")])]),e("li",[e("a",{attrs:{href:"#private-registries"}},[this._v("Private Registries")])]),e("li",[e("a",{attrs:{href:"#security-policies"}},[this._v("Security Policies")])]),e("li",[e("a",{attrs:{href:"#container-policy"}},[this._v("Container Policy")]),e("ul",[e("li",[e("a",{attrs:{href:"#default-security-opts-array"}},[this._v("Default Security Opts Array")])]),e("li",[e("a",{attrs:{href:"#default-capabilities-drop-array"}},[this._v("Default Capabilities Drop Array")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("These are advanced configurations for the daemon. You risk breaking your daemon and making containers un-usable if\nyou modify something incorrectly. Proceed at your own risk, and only if you know what each configuration value does.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The documentation below uses dot-notated JSON to explain where each setting should live. You will need to manually\nexpand this syntax when adding to the "),e("code",[this._v("core.json")]),this._v(" file for the Daemon. For example, something like "),e("code",[this._v("internals.throttle.enabled")]),this._v("\nwould be expanded to the JSON below.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"internals"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"throttle"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v('"enabled"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"output-throttles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output-throttles","aria-hidden":"true"}},[this._v("#")]),this._v(" Output Throttles")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Setting Path")]),t._v(" "),s("th",[t._v("Default Value")]),t._v(" "),s("th",[t._v("Notes")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("enabled")])]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("Determines if the throttle (and associated values below) should be used.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("kill_at_count")])]),t._v(" "),s("td",[t._v("5")]),t._v(" "),s("td",[t._v("The number of warnings that can accumulate for a particular instance before the server process is killed. The decay time below affects how quickly this value is decreased.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("decay")])]),t._v(" "),s("td",[t._v("10")]),t._v(" "),s("td",[t._v("The number of seconds that a server process must go without triggering a data throttle warning before the throttle count begins decreasing. This loop is processed every 5 seconds and will decrement the throttle count by one when the process goes more than this number of seconds without a data throttle occurring.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("bytes")])]),t._v(" "),s("td",[t._v("30720")]),t._v(" "),s("td",[t._v("⚠️ "),s("em",[t._v("(removed in v0.5.5)")]),t._v(" The maximum number of bytes of data that can be output in the defined interval before a warning occurs.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("lines")])]),t._v(" "),s("td",[t._v("1000")]),t._v(" "),s("td",[t._v("⚠️ "),s("em",[t._v("(added in v0.5.6)")]),t._v(" The number of lines that can be output by the server process in the defined check interval time. By default, 5,000 lines in ~500ms results in a server process kill.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("check_interval_ms")])]),t._v(" "),s("td",[t._v("100")]),t._v(" "),s("td",[t._v("The number of milliseconds between the throttle resetting the used bytes or line count.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Please note that all of the settings above are in the "),e("code",[this._v("internals.throttle.X")]),this._v(" path. So, "),e("code",[this._v("enabled")]),this._v(" is actually "),e("code",[this._v("internals.throttle.enabled")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"custom-network-interfaces"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-network-interfaces","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom Network Interfaces")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("If for whatever reason you need to modify the network interfaces used for Pterodactyl's local Docker network you\ncan do so by modifying the "),s("code",[t._v("core.json")]),t._v(" file for the daemon. In most cases you'll just be modifying the network\nname to allow your servers to use the host network stack. To do so, just change "),s("code",[t._v("docker.network.name")]),t._v(" to be "),s("code",[t._v("host")]),t._v("\nrather than "),s("code",[t._v("pterodactyl_nw")]),t._v(" as shown below.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("While changing to the host network stack does allow servers running on Pterodactyl to have direct access to local\ninterfaces and bind to specific IP addresses (required for some Steam games), it is not recommended on public\ninstallations of Pterodactyl (where you have other users running servers).")]),this._v(" "),e("p",[this._v("Using the "),e("code",[this._v("host")]),this._v(" stack removes many network specific protections afforded by Docker, and will allow server processes\nto access anything on the host, as well as bind to any IP or Port they wish.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"danger custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("Any changes to the network after the daemon has been started will require you to remove the docker network and restart the daemon. Any servers on the host need to be stopped before and most likely rebuilt.")]),this._v(" "),e("p",[this._v("The following will stop the daemon, remove the network, and start the daemon again. Run at your own risk."),e("br"),this._v(" "),e("code",[this._v("systemctl stop wings && docker network rm pterodactyl_nw && systemctl start wings")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token property"}},[t._v('"docker"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"socket"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"/var/run/docker.sock"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"autoupdate_images"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"network"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v('"name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"pterodactyl_nw"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v('"interfaces"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token property"}},[t._v('"v4"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{attrs:{class:"token property"}},[t._v('"subnet"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"172.18.0.0/16"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{attrs:{class:"token property"}},[t._v('"gateway"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"172.18.0.1"')]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"interface"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"172.18.0.1"')]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"private-registries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#private-registries","aria-hidden":"true"}},[this._v("#")]),this._v(" Private Registries")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Setting Path")]),t._v(" "),s("th",[t._v("Default Value")]),t._v(" "),s("th",[t._v("Notes")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("username")])]),t._v(" "),s("td",[s("em",[t._v("none")])]),t._v(" "),s("td",[t._v("The username to use when connecting to the registry.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("password")])]),t._v(" "),s("td",[s("em",[t._v("none")])]),t._v(" "),s("td",[t._v("The password associated with the account.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("auth")])]),t._v(" "),s("td",[s("em",[t._v("none")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("email")])]),t._v(" "),s("td",[s("em",[t._v("none")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("serveraddress")])]),t._v(" "),s("td",[s("em",[t._v("none")])]),t._v(" "),s("td",[t._v("The address to the server the registry is located on.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("key")])]),t._v(" "),s("td",[s("em",[t._v("none")])]),t._v(" "),s("td",[t._v("A pre-generated base64 encoded authentication string. If provided none of the above options are required.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Please note that all of the settings above are in the "),e("code",[this._v("docker.registry.X")]),this._v(" path. So, "),e("code",[this._v("username")]),this._v(" is actually "),e("code",[this._v("docker.registry.username")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"security-policies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#security-policies","aria-hidden":"true"}},[this._v("#")]),this._v(" Security Policies")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Setting Path")]),t._v(" "),s("th",[t._v("Default Value")]),t._v(" "),s("th",[t._v("Notes")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("ipv6")])]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("Set this to false to disable IPv6 networking on the pterodactyl0 interface.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("internal")])]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("Set this to true to prevent any external network access to all containers on the pterodactyl0 interface.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("enable_icc")])]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("Set this to false to disallow containers to access services running on the host system's non-public IP addresses. Setting this to false does make it impossible to connect (from a container) to MySQL/Redis/etc. running on the host system without using the public IP address.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("enable_ip_masquerade")])]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("Set this to false to disable IP Masquerading on the pterodactyl0 interface.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Please note that all of the settings above are in the "),e("code",[this._v("docker.policy.network.X")]),this._v(" path. So, "),e("code",[this._v("ipv6")]),this._v(" is actually "),e("code",[this._v("docker.policy.network.ipv6")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"container-policy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#container-policy","aria-hidden":"true"}},[this._v("#")]),this._v(" Container Policy")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Setting Path")]),this._v(" "),e("th",[this._v("Default Value")]),this._v(" "),e("th",[this._v("Notes")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("tmpfs")])]),this._v(" "),e("td",[e("code",[this._v("rw,exec,nosuid,size=50M")])]),this._v(" "),e("td",[this._v("These are the arguments used for mounting a "),e("code",[this._v("tmpfs")]),this._v(" directory into containers to allow certain programs to run.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[s("code",[t._v("log_driver")])]),t._v(" "),s("td",[t._v("none")]),t._v(" "),s("td",[t._v("⚠️ This option was "),s("strong",[t._v("removed")]),t._v(" in "),s("code",[t._v("v0.6")]),t._v(" and is forcibly set to "),s("code",[t._v("json-file")]),t._v(". The log driver to use for containers. We default to "),s("code",[t._v("none")]),t._v(" to mitigate a potential DoS attack vector if a server were to spam log output.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("log_opts")])]),this._v(" "),e("td",[this._v("array")]),this._v(" "),e("td")])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("log_opts.max_size")])]),this._v(" "),e("td",[e("code",[this._v("5m")])]),this._v(" "),e("td",[this._v("The maximum size of the server output log file created by Docker.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("log_opts.max_files")])]),this._v(" "),e("td",[e("code",[this._v("1")])]),this._v(" "),e("td",[this._v("The maximum number of files that Docker will create with output from the server.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("readonly_root")])]),this._v(" "),e("td",[this._v("true")]),this._v(" "),e("td",[this._v("Determines if the root filesystem of the container should be readonly.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("securityopts")])]),this._v(" "),e("td",[this._v("array")]),this._v(" "),e("td",[this._v("An array of security options to apply to a container. The default array is provided below.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("cap_drop")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Please note that all of the settings above are in the "),e("code",[this._v("docker.policy.container.X")]),this._v(" path. So, "),e("code",[this._v("tmpfs")]),this._v(" is actually "),e("code",[this._v("docker.policy.container.tmpfs")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"default-security-opts-array"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default-security-opts-array","aria-hidden":"true"}},[this._v("#")]),this._v(" Default Security Opts Array")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[this._v("[")]),this._v("\n    'no-new-privileges'"),e("span",{attrs:{class:"token punctuation"}},[this._v(",")]),this._v("\n"),e("span",{attrs:{class:"token punctuation"}},[this._v("]")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"default-capabilities-drop-array"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default-capabilities-drop-array","aria-hidden":"true"}},[this._v("#")]),this._v(" Default Capabilities Drop Array")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Starting with "),s("code",[t._v("v0.6")]),t._v(" of the Daemon, the following previously "),s("em",[t._v("dropped")]),t._v(" capabilities are available in containers: "),s("code",[t._v("chown")]),t._v(", "),s("code",[t._v("kill")]),t._v(", "),s("code",[t._v("setgid")]),t._v(", and "),s("code",[t._v("setuid")]),t._v(".")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    'setpcap'"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'mknod'"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'audit_write'"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'net_raw'"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'dac_override'"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'fowner'"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'fsetid'"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'net_bind_service'"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'sys_chroot'"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'setfcap'"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);