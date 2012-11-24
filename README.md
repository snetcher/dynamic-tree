# dynamic-tree

#### This script will turn the unordered list in the navigation accordion.

## Install Sublime
Go to http://zenhtml.com, download & install.

## Contents
1. **[Install](#install)**

  i. [Include jQuery library] (#jquery_inc)
  
  ii. [Create Strusture] (#create_structure)

# <a name="install"></a> Install

## <a name="jquery_inc"></a> Include jQuery library

[jQuery download](http://jquery.com/)

## <a name="create_structure"></a> Create Strusture

Strusture Create
Test
``` JavaScript
$(document).ready( function(){
	var container = $( '#nav-accordion' ),
	      target = 'ul ul';
		  
		  navacc = new NavAcc( container, target );
});
```
