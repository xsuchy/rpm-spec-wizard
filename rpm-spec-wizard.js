function getName() {
    return document.getElementById('package-name-input').value;
}


function getVersion() {
    return document.getElementById('package-version-input').value;
}


function getRelease() {
    return document.getElementById('package-release-input').value;
}


function getSummary() {
    return document.getElementById('package-summary-input').value;
}


function getDescription() {
    var value = document.getElementById('package-description-input').value;
    return requiredSection("%description", value)
}


function getLicense() {
    return document.getElementById('package-license-input').value;
}


function getUrl() {
    return document.getElementById('package-url-input').value;
}


function getSource0Value() {
    return document.getElementById('package-source0-input').value
}


function getSource0() {
    value = getSource0Value()
    return optionalMacro("Source0", value);
}


function getPatch0() {
    var value = document.getElementById('package-patch0-input').value;
    return optionalMacro("Patch0", value);
}


function getBuildArch() {
    var value = document.getElementById('package-buildArch-input').value;
    return optionalMacro("BuildArch", value);
}


function getBuildRequires() {
    var value = document.getElementById('package-buildRequires-input').value;
    return repeatedOptionalMacro("BuildRequires", value);
}


function getRequires() {
    var value = document.getElementById('package-requires-input').value;
    return repeatedOptionalMacro("Requires", value);
}


function getExcludeArch() {
    var value = document.getElementById('package-excludeArch-input').value;
    return repeatedOptionalMacro("ExcludeArch", value);
}


function getPrep() {
    var value = document.getElementById('package-prep-input').value;
    return optionalSection("%prep", value);
}


function getBuild() {
    var value = document.getElementById('package-build-input').value;
    return optionalSection("%build", value);
}


function getInstall() {
    var value = document.getElementById('package-install-input').value;
    return optionalSection("%install", value);
}


function getPre() {
    var value = document.getElementById('package-pre-input').value;
    return optionalSection("%pre", value);
}


function getPost() {
    var value = document.getElementById('package-post-input').value;
    return optionalSection("%post", value);
}


function getPreun() {
    var value = document.getElementById('package-preun-input').value;
    return optionalSection("%preun", value);
}


function getPostun() {
    var value = document.getElementById('package-postun-input').value;
    return optionalSection("%postun", value);
}


function getPosttrans() {
    var value = document.getElementById('package-posttrans-input').value;
    return optionalSection("%posttrans", value);
}


function getFiles() {
    var value = document.getElementById('package-files-input').value;
    return requiredSection("%files", value);
}


function getChangelog() {
    var value = encodeHTML(document.getElementById('package-changelog-input').value);
    return requiredSection("%changelog", value);
}


function getSpec() {
    return getName() + ".spec"
}


function getRpmbuildBS() {
    return "rpmbuild -bs ~/rpmbuild/SPECS/" + getSpec()
}


function getRpmbuildBA() {
    return "rpmbuild -ba ~/rpmbuild/SPECS/" + getSpec()
}


function optionalMacro(name, value) {
    if (!value) {
        return "";
    }
    var result = "\n";
    result += (name + ":").padEnd(25);
    result += value;
    return result;
}


function repeatedOptionalMacro(name, value) {
    if (!value) {
        return "";
    }
    var result = "";
    value.split("\n").forEach(element => {
        result += optionalMacro(name, element);
    })
    return result;
}


function optionalSection(name, value) {
    if (!value) {
        return "";
    }
    return requiredSection(name, value);
}


function requiredSection(name, value) {
    return `\n${name}\n${value}\n`;
}


function refreshSpec() {
    document.querySelector('.result .package-name').innerHTML = getName();
    document.querySelector('.result .package-version').innerHTML = getVersion();
    document.querySelector('.result .package-release').innerHTML = getRelease();
    document.querySelector('.result .package-summary').innerHTML = getSummary();
    document.querySelector('.result .package-description').innerHTML = getDescription();
    document.querySelector('.result .package-license').innerHTML = getLicense();
    document.querySelector('.result .package-url').innerHTML = getUrl();

    document.querySelector('.result .package-source0').innerHTML = getSource0();
    document.querySelector('.result .package-patch0').innerHTML = getPatch0();
    document.querySelector('.result .package-buildArch').innerHTML = getBuildArch();

    document.querySelector('.result .package-buildRequires').innerHTML = getBuildRequires();
    document.querySelector('.result .package-requires').innerHTML = getRequires();
    document.querySelector('.result .package-excludeArch').innerHTML = getExcludeArch();

    document.querySelector('.result .package-prep').innerHTML = getPrep();
    document.querySelector('.result .package-build').innerHTML = getBuild();
    document.querySelector('.result .package-install').innerHTML = getInstall();
    document.querySelector('.result .package-pre').innerHTML = getPre();
    document.querySelector('.result .package-post').innerHTML = getPost();
    document.querySelector('.result .package-preun').innerHTML = getPreun();
    document.querySelector('.result .package-postun').innerHTML = getPostun();
    document.querySelector('.result .package-posttrans').innerHTML = getPosttrans();
    document.querySelector('.result .package-files').innerHTML = getFiles();
    document.querySelector('.result .package-changelog').innerHTML = getChangelog();

    if (getSpec() && getSource0Value()) {
        document.querySelector('.next-steps .package-spec').innerHTML = getSpec();
        document.querySelector('.next-steps .package-source0').innerHTML = getSource0Value();
        document.querySelector('.next-steps .rpmbuild-bs').innerHTML = getRpmbuildBS();
        document.querySelector('.next-steps .rpmbuild-ba').innerHTML = getRpmbuildBA();
        $(".next-steps-ready").removeClass("hidden");
        $(".next-steps-not-ready").addClass("hidden");
    } else {
        $(".next-steps-ready").addClass("hidden");
        $(".next-steps-not-ready").removeClass("hidden");
    }
}


//today's date in the correct format for description
function changelogCopy(){
date =  new Date();
switch (date.getDay()) {
  case 0: day = "Sun";
    break;
  case 1: day = "Mon";
    break;
  case 2: day = "Tue";
    break;
  case 3: day = "Wed";
    break;
  case 4: day = "Thu";
    break;
  case 5: day = "Fri";
    break;
  case 6: day = "Sat";
}
switch(date.getMonth()) {
  case 0: m = "Jan";
    break;
  case 1: m = "Feb";
    break;
  case 2: m = "Mar";
    break;
  case 3: m = "Apr";
    break;
  case 4: m = "May";
    break;
  case 8: m = "Jun";
    break;
  case 6: m = "Jul";
    break;
  case 7: m = "Aug";
    break;
  case 8: m = "Sep";
    break;
  case 9: m = "Oct";
    break;
  case 10: m = "Nov";
    break;
  case 11: m = "Dec";
    break;
}
d = date.getDate();
y = date.getFullYear();
n = document.getElementById("userName").value
if (document.getElementById("emailAddress").value){
  e = ("&lt;" + document.getElementById("emailAddress").value + "&gt;");
}else {
  e = ""
}
document.getElementById("dateAndName").innerHTML = "* " + day + " " + m + " " + d+ " " + y + " " + n + " " + e;
}

//escape special characters
function encodeHTML(insecureString) {
  return insecureString.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}


//select (and copy to clipboard)
function selectText(containerid) {
  if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    //document.execCommand('Copy');
    //alert('Your SPEC file has been copied to the clipboard.');
}}

function createWizard() {
    return function(id) {
        var self = this, modal, tabs, tabCount, tabLast, currentGroup, currentTab, contents;
        self.id = id;

        $(self.id).click(function() {
            self.init(this)
        });

        this.init = function(button){
        // get id of open modal
        self.modal = $(button).data("target");

        // open modal
        $(self.modal).modal('show');


        // assign data attribute to all tabs
        $(self.modal + " .wizard-pf-sidebar .list-group-item").each(function() {
            // set the first digit (i.e. n.0) equal to the index of the parent tab group
            // set the second digit (i.e. 0.n) equal to the index of the tab within the tab group
            $(this).attr("data-tab", ($(this).parent().index() +1 + ($(this).index()/100 + .01)));
        });
        // assign data attribute to all tabgroups
        $(self.modal + " .wizard-pf-sidebar .list-group").each(function() {
            // set the value equal to the index of the tab group
            $(this).attr("data-tabgroup", ($(this).index() +1));
        });

        // assign data attribute to all step indicator steps
        $(self.modal + " .wizard-pf-steps-indicator  .wizard-pf-step").each(function() {
            // set the value equal to the index of the tab group
            $(this).attr("data-tabgroup", ($(this).index() +1));
        });
        // assign data attribute to all step indicator substeps
        $(self.modal + " .wizard-pf-steps-indicator .wizard-pf-step-title-substep").each(function() {
            // set the first digit (i.e. n.0) equal to the index of the parent tab group
            // set the second digit (i.e. 0.n) equal to the index of the tab within the tab group
            $(this).attr("data-tab", ($(this).parent().parent().index() + 1 + (($(this).index() - 2)/100 + .01)));
        });


        // create array of all tabs, using the data attribute, and determine the last tab
        self.tabs = $(self.modal + " .wizard-pf-sidebar .list-group-item" ).map(function()
            {
            return $(this).data("tab");
            }
        );
        self.tabCount = self.tabs.length;
        self.tabSummary = self.tabs[self.tabCount - 1]; // last tab displays summary
        self.tabLast = self.tabs[self.tabCount - 1]; // last tab displays progress
        // set first tab group and tab as current tab
        // if someone wants to target a specific tab, that could be handled here
        self.currentGroup = 1;
        self.currentTab = 1.01;
        self.updateTabGroup();
        // hide loading message
        $(self.modal + " .wizard-pf-loading").addClass("hidden");
        // show tabs and tab groups
        $(self.modal + " .wizard-pf-steps").removeClass("hidden");
        $(self.modal + " .wizard-pf-sidebar").removeClass("hidden");
        // remove active class from all tabs
        $(self.modal + " .wizard-pf-sidebar .list-group-item.active").removeClass("active");
        // apply active class to new current tab and associated contents
        self.updateActiveTab();

        self.updateWizardFooterDisplay();

        //initialize click listeners
        self.tabGroupSelect();
        self.tabSelect();
        self.backBtnClicked();
        self.nextBtnClicked();
        self.cancelBtnClick();


        };

        // update which tab group is active
        this.updateTabGroup = function() {
        $(self.modal + " .wizard-pf-step.active").removeClass("active");
        $(self.modal + " .wizard-pf-step[data-tabgroup='" + self.currentGroup + "']").addClass("active");
        $(self.modal + " .wizard-pf-sidebar .list-group").addClass("hidden");
        $(self.modal + " .list-group[data-tabgroup='" + self.currentGroup + "']").removeClass("hidden");
        };

        // update which tab is active
        this.updateActiveTab = function() {
        $(self.modal + " .list-group-item[data-tab='" + self.currentTab + "']").addClass("active");

        // Update steps indicator to handle mobile mode
        $(self.modal + " .wizard-pf-steps-indicator .wizard-pf-step-title-substep").removeClass("active");
        $(self.modal + " .wizard-pf-steps-indicator .wizard-pf-step-title-substep[data-tab='" + self.currentTab + "']").addClass("active");

        self.updateVisibleContents();
        };

        // update which contents are visible
        this.updateVisibleContents = function() {
        var tabIndex = ($.inArray(self.currentTab, self.tabs));
        // displaying contents associated with currentTab
        $(self.modal + " .wizard-pf-contents").addClass("hidden");
        $(self.modal + " .wizard-pf-contents:eq(" + tabIndex + ")").removeClass("hidden");
        // setting focus to first form field in active contents
        setTimeout (function() {
            $(".wizard-pf-contents:not(.hidden) form input, .wizard-pf-contents:not(.hidden) form textarea, .wizard-pf-contents:not(.hidden) form select").first().focus(); // this does not account for disabled or read-only inputs
        }, 100);
        };

        // update display state of Back button
        this.updateBackBtnDisplay = function() {
        if (self.currentTab == self.tabs[0]) {
            $(self.modal + " .wizard-pf-back").addClass("disabled");
        }
        };

        // update display state of next/finish button
        this.updateNextBtnDisplay = function() {
        if (self.currentTab == self.tabSummary) {
            $(self.modal + " .wizard-pf-next").addClass("hidden");
            $(self.modal + " .wizard-pf-finish").removeClass("hidden");
            //This refreshes results when reaching last page by any means.
            refreshSpec()
        } else {
            $(self.modal + " .wizard-pf-finish").addClass("hidden");
            $(self.modal + " .wizard-pf-next").removeClass("hidden");
        }
        };

        // update display state of buttons in the footer
        this.updateWizardFooterDisplay = function() {
        $(self.modal + " .wizard-pf-footer .disabled").removeClass("disabled");
        self.updateBackBtnDisplay();
        self.updateNextBtnDisplay();
        };



        // when the user clicks a step, then the tab group for that step is displayed
        this.tabGroupSelect = function() {
        $(self.modal + " .wizard-pf-step>a").click(function() {
            // remove active class active tabgroup and add active class to the
            // clicked tab group (but don't remove the active class from current tab)
            self.currentGroup = $(this).parent().data("tabgroup");
            self.updateTabGroup();
            // update value for currentTab -- if a tab is already marked as active
            // for the new tab group, use that, otherwise set it to the first tab
            // in the tab group
            self.currentTab = $(self.modal + " .list-group[data-tabgroup='" + self.currentGroup + "'] .list-group-item.active").data("tab");
            if (self.currentTab == undefined) {
            self.currentTab = $(self.modal + " .list-group[data-tabgroup='" + self.currentGroup + "'] .list-group-item:first-child").data("tab");
            // apply active class to new current tab and associated contents
            self.updateActiveTab();
            } else {
            // use already active tab and just update contents
            self.updateVisibleContents();
            }
            // show/hide/disable/enable buttons if needed
            self.updateWizardFooterDisplay();
        });
        };

        // when the user clicks a tab, then the tab contents are displayed
        this.tabSelect = function() {
        $(self.modal + " .wizard-pf-sidebar .list-group-item>a").click(function() {
            // update value of currentTab to new active tab
            self.currentTab = $(this).parent().data("tab");
            // remove active class from active tab in current active tab group (i.e.
            // don't remove the class from tabs in other groups)
            $(self.modal + " .list-group[data-tabgroup='" + self.currentGroup + "'] .list-group-item.active").removeClass("active");
            // add active class to the clicked tab and the associated contents
            $(this).parent().addClass("active");
            self.updateVisibleContents();
            if (self.currentTab == self.tabLast) {
            $(self.modal + " .wizard-pf-next").addClass("hidden");
            $(self.modal + " .wizard-pf-finish").removeClass("hidden");
            self.finish();
            } else {
            // show/hide/disable/enable buttons if needed
            self.updateWizardFooterDisplay();
            }
        });
        };

        // Back button clicked
        this.backBtnClicked = function() {
        $(self.modal + " .wizard-pf-back").click(function() {
            // if not the first page
            if (self.currentTab != self.tabs[0]) {
            // go back a page (i.e. -1)
            self.wizardPaging(-1);
            // show/hide/disable/enable buttons if needed
            self.updateWizardFooterDisplay();
            }
        });
        };

        // Next button clicked
        this.nextBtnClicked = function() {
        $(self.modal + " .wizard-pf-next").click(function() {
            // go forward a page (i.e. +1)
            self.wizardPaging(1);
            // show/hide/disable/enable buttons if needed
            self.updateWizardFooterDisplay();
        });
        };

        // Cancel/Close button clicked
        this.cancelBtnClick = function() {
        $(self.modal + " .wizard-pf-dismiss").click(function() {
            // close the modal
            $(self.modal).modal('hide');
            // drop click event listeners
            $(self.modal + " .wizard-pf-step>a").off("click");
            $(self.modal + " .wizard-pf-sidebar .list-group-item>a").off("click");
            $(self.modal + " .wizard-pf-back").off("click");
            $(self.modal + " .wizard-pf-next").off("click");
            $(self.modal + " .wizard-pf-finish").off("click");
            $(self.modal + " .wizard-pf-dismiss").off("click");
            // reset final step
            $(self.modal + " .wizard-pf-process").removeClass("hidden");
            $(self.modal + " .wizard-pf-complete").addClass("hidden");
            // reset loading message
            $(self.modal + " .wizard-pf-contents").addClass("hidden");
            $(self.modal + " .wizard-pf-loading").removeClass("hidden");
            // remove tabs and tab groups
            $(self.modal + " .wizard-pf-steps").addClass("hidden");
            $(self.modal + " .wizard-pf-sidebar").addClass("hidden");
            // reset buttons in final step
            $(self.modal + " .wizard-pf-close").addClass("hidden");
            $(self.modal + " .wizard-pf-cancel").removeClass("hidden");
        });
        };

        // when the user clicks Next/Back, then the next/previous tab and contents display
        this.wizardPaging = function(direction) {
        // get n.n value of next tab using the index of next tab in tabs array
        var tabIndex = ($.inArray(self.currentTab, self.tabs)) + direction;
        var newTab = self.tabs[tabIndex];
        // add/remove active class from current tab group
        // included math.round to trim off extra .000000000002 that was getting added
        if (Math.round(newTab * 100) != Math.round(100*(direction*.01 + self.currentTab))) {
            // this statement is true when the next tab is in the next tab group
            // if next tab is in next tab group (e.g. next tab data-tab value is
            // not equal to current tab +.01) then apply active class to next
            // tab group and step, and update the value for var currentGroup +/-1
            self.currentGroup = self.currentGroup + direction;
            self.updateTabGroup();
        }
        self.currentTab = newTab;
        // remove active class from active tab in current tab group
        $(self.modal + " .list-group[data-tabgroup='" + self.currentGroup + "'] .list-group-item.active").removeClass("active");
        // apply active class to new current tab and associated contents
        self.updateActiveTab();
        };

        // This code keeps the same contents div active, but switches out what
        // contents display in that div (i.e. replaces process message with
        // success message).
        this.finish = function() {
        $(self.modal + " .wizard-pf-back").addClass("disabled"); // if Back remains enabled during this step, then the Close button needs to be removed when the user clicks Back
        $(self.modal + " .wizard-pf-finish").addClass("disabled");
        // code for kicking off process goes here
        // the next code is just to simulate the expected experience, in that
        // when the process is complete, the success message etc. would display
        setTimeout (function() {
            $(self.modal + " .wizard-pf-cancel").addClass("hidden");
            $(self.modal + " .wizard-pf-finish").addClass("hidden");
            $(self.modal + " .wizard-pf-close").removeClass("hidden");
            $(self.modal + " .wizard-pf-process").addClass("hidden");
            $(self.modal + " .wizard-pf-complete").removeClass("hidden");
        }, 3000);
        };

    }
}
