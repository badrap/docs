(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{184:function(e,t,a){e.exports=a.p+"assets/img/aws-external-id.a2a3be74.jpg"},185:function(e,t,a){e.exports=a.p+"assets/img/aws-another-aws-account.827e6c8e.jpg"},186:function(e,t,a){e.exports=a.p+"assets/img/aws-external-id2.86d140cc.jpg"},187:function(e,t,a){e.exports=a.p+"assets/img/aws-create-policy.ee511b2e.jpg"},188:function(e,t,a){e.exports=a.p+"assets/img/aws-return.e83912f5.jpg"},206:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"amazon-web-services-aws"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amazon-web-services-aws","aria-hidden":"true"}},[e._v("#")]),e._v(" Amazon Web Services (AWS)")]),e._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),s("p",[e._v("Connect to Amazon Web Services to automatically bring your cloud assets into Badrap for monitoring.")]),e._v(" "),s("h2",{attrs:{id:"install-the-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-the-app","aria-hidden":"true"}},[e._v("#")]),e._v(" Install the App")]),e._v(" "),s("ol",[s("li",[e._v("Open the "),s("a",{attrs:{href:"https://badrap.io/apps/aws",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS app page"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("li",[e._v("Install the app.")]),e._v(" "),s("li",[e._v("Take note of the External ID value that the app has generated for you. You'll need this later.")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(184),alt:"External Id"}})]),e._v(" "),s("h2",{attrs:{id:"create-required-aws-role-policy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-required-aws-role-policy","aria-hidden":"true"}},[e._v("#")]),e._v(" Create Required AWS Role & Policy")]),e._v(" "),s("p",[e._v("Setting up the Badrap app with Amazon Web Services requires configuring role delegation using AWS IAM.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Create a new role in the "),s("a",{attrs:{href:"https://console.aws.amazon.com/iam/home#/roles",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS IAM console."),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[e._v("Select "),s("code",[e._v("Another AWS account")]),e._v(" for the role type.")])]),e._v(" "),s("li",[s("p",[e._v("Enter "),s("code",[e._v("808384617942")]),e._v(" (Badrap's Account ID) as the "),s("code",[e._v("Account ID")]),e._v(".\n"),s("img",{attrs:{src:a(185),alt:"Another AWS Acocount"}})])]),e._v(" "),s("li",[s("p",[e._v("Check the "),s("code",[e._v("Require external ID")]),e._v(" option, and enter the External ID that the app generated for you earlier as the "),s("code",[e._v("External ID")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Leave the "),s("code",[e._v("Require MFA")]),e._v(" option unchecked.")])]),e._v(" "),s("li",[s("p",[e._v("Click "),s("code",[e._v("Next: Permissions")]),e._v(".\n"),s("img",{attrs:{src:a(186),alt:"External Id"}})])]),e._v(" "),s("li",[s("p",[e._v("If you've already created a policy, skip the following substeps. Otherwise click "),s("code",[e._v("Create Policy")]),e._v(", which opens a new window.\n"),s("img",{attrs:{src:a(187),alt:"Create Policy"}})]),e._v(" "),s("ol",[s("li",[e._v("Select the "),s("code",[e._v("JSON")]),e._v(" tab and enter the following policy snippet into the text box:")])]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2012-10-17"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Statement"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Sid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"VisualEditor0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Effect"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Allow"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Action"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ec2:DescribeInstances"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"lightsail:GetInstances"')]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Resource"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*"')]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[e._v("Click "),s("code",[e._v("Review policy")]),e._v(".")]),e._v(" "),s("li",[e._v("Name the policy (e.g., "),s("code",[e._v("BadrapAppPolicy")]),e._v(").")]),e._v(" "),s("li",[e._v("Click "),s("code",[e._v("Create policy")])]),e._v(" "),s("li",[e._v("Return to the "),s("code",[e._v("Create role")]),e._v(" window.")]),e._v(" "),s("li",[e._v("Refresh the list of policies")])])]),e._v(" "),s("li",[s("p",[e._v("Select the BadrapAppPolicy\n"),s("img",{attrs:{src:a(188),alt:"Create Policy"}})])]),e._v(" "),s("li",[s("p",[e._v("Click "),s("code",[e._v("Next: Tags")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Click "),s("code",[e._v("Next: Review")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Name the role (e.g., "),s("code",[e._v("BadrapAppRole")]),e._v(").")])]),e._v(" "),s("li",[s("p",[e._v("Click "),s("code",[e._v("Create role")]),e._v(".")])])]),e._v(" "),s("h2",{attrs:{id:"finish-the-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#finish-the-installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Finish the Installation")]),e._v(" "),s("ol",[s("li",[e._v("Return to the "),s("a",{attrs:{href:"https://badrap.io/apps/aws",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS app page"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("li",[e._v("Enter your "),s("a",{attrs:{href:"https://console.aws.amazon.com/billing/home?#/account",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS Account ID"),s("OutboundLink")],1),e._v(" into the "),s("code",[e._v("Account ID")]),e._v(" field.")]),e._v(" "),s("li",[e._v("Enter the name of the AWS role you created earlier. "),s("strong",[e._v("Note that the role name is case sensitive!")])]),e._v(" "),s("li",[e._v("Click "),s("code",[e._v("Add")]),e._v(".")])])])},[],!1,null,null,null);t.default=r.exports}}]);