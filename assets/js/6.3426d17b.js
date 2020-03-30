(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{189:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"amazon-web-services-aws"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amazon-web-services-aws","aria-hidden":"true"}},[e._v("#")]),e._v(" Amazon Web Services (AWS)")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("Connect to Amazon Web Services to automatically bring your cloud assets into Badrap for monitoring.")]),e._v(" "),a("h2",{attrs:{id:"install-the-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-app","aria-hidden":"true"}},[e._v("#")]),e._v(" Install the App")]),e._v(" "),a("ol",[a("li",[e._v("Open the "),a("a",{attrs:{href:"https://badrap.io/apps/aws",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS app page"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Install the app.")]),e._v(" "),a("li",[e._v("Take note of the External ID value that the app has generated for you. You'll need this later.")])]),e._v(" "),a("h2",{attrs:{id:"create-required-aws-role-policy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-required-aws-role-policy","aria-hidden":"true"}},[e._v("#")]),e._v(" Create Required AWS Role & Policy")]),e._v(" "),a("p",[e._v("Setting up the Badrap app with Amazon Web Services requires configuring role delegation using AWS IAM.")]),e._v(" "),a("ol",[a("li",[e._v("Create a new role in the "),a("a",{attrs:{href:"https://console.aws.amazon.com/iam/home#/roles",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS IAM console."),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("Another AWS account")]),e._v(" for the role type.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("808384617942")]),e._v(" (Badrap's Account ID) as the "),a("code",[e._v("Account ID")]),e._v(".")]),e._v(" "),a("li",[e._v("Check the "),a("code",[e._v("Require external ID")]),e._v(" option, and enter the External ID that the app generated for you earlier as the "),a("code",[e._v("External ID")]),e._v(".")]),e._v(" "),a("li",[e._v("Leave the "),a("code",[e._v("Require MFA")]),e._v(" option unchecked.")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Next: Permissions")]),e._v(".")]),e._v(" "),a("li",[e._v("If you've already created a policy, skip the following substeps. Otherwise click "),a("code",[e._v("Create Policy")]),e._v(", which opens a new window.\n"),a("ol",[a("li",[e._v("Select the "),a("code",[e._v("JSON")]),e._v(" tab and enter the following policy snippet into the text box:")])]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2012-10-17"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Statement"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Sid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"VisualEditor0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Effect"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Allow"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Action"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ec2:DescribeInstances"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"lightsail:GetInstances"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ec2:DescribeRegions"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"lightsail:GetRegions"')]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Resource"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*"')]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Click "),a("code",[e._v("Review policy")]),e._v(".")]),e._v(" "),a("li",[e._v("Name the policy (e.g., "),a("code",[e._v("BadrapAppPolicy")]),e._v(").")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Create policy")])]),e._v(" "),a("li",[e._v("Return to the "),a("code",[e._v("Create role")]),e._v(" window.")])])]),e._v(" "),a("li",[e._v("Refresh the list of policies and select the policy you just created.")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Next: Tags")]),e._v(".")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Next: Review")]),e._v(".")]),e._v(" "),a("li",[e._v("Name the role (e.g., "),a("code",[e._v("BadrapAppRole")]),e._v(").")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Create role")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"finish-the-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#finish-the-installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Finish the Installation")]),e._v(" "),a("ol",[a("li",[e._v("Return to the "),a("a",{attrs:{href:"https://badrap.io/apps/aws",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS app page"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Enter your "),a("a",{attrs:{href:"https://console.aws.amazon.com/billing/home?#/account",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS Account ID"),a("OutboundLink")],1),e._v(" into the "),a("code",[e._v("Account ID")]),e._v(" field.")]),e._v(" "),a("li",[e._v("Enter the name of the AWS role you created earlier. "),a("strong",[e._v("Note that the role name is case sensitive!")])]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Add")]),e._v(".")])])])},[],!1,null,null,null);t.default=r.exports}}]);