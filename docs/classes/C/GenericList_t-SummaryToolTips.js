﻿NDSummary.OnToolTipsLoaded("CClass:GenericList_t",{33:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype33\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">extern const</span> <span class=\"SHKeyword\">struct</span></div><div class=\"CPName\">GenericList_t</div></div></div><div class=\"TTSummary\">The struct that creates and performs operations on objects of type GenericList.</div></div>",16:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype16\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">GenericList* (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PSymbols first\">*</td><td class=\"PName last\">new</td></tr></table></td><td class=\"PAfterParameters\">)(<span class=\"SHKeyword\">void</span>)</td></tr></table></div></div><div class=\"TTSummary\">Creates and initializes a GenericList object.</div></div>",17:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype17\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PSymbols first\">*</td><td class=\"PName last\">delete</td></tr></table></td><td class=\"PAfterParameters\">)(GenericList **obj)</td></tr></table></div></div><div class=\"TTSummary\">Deletes a GenericList object and sets its pointer to NULL.</div></div>",6:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PSymbols first\">*</td><td class=\"PName last\">print</td></tr></table></td><td class=\"PAfterParameters\">)(<span class=\"SHKeyword\">const</span> GenericList * <span class=\"SHKeyword\">const</span> obj)</td></tr></table></div></div><div class=\"TTSummary\">Prints the contents of a GenericList object.</div></div>",9:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PSymbols first\">*</td><td class=\"PName last\">setElementSize</td></tr></table></td><td class=\"PAfterParameters\">)(GenericList *self, <span class=\"SHKeyword\">const</span> size_t newSize)</td></tr></table></div></div><div class=\"TTSummary\">Sets the size of the elements stored in the list.</div></div>",52:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype52\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PSymbols first\">*</td><td class=\"PName last\">setListSize</td></tr></table></td><td class=\"PAfterParameters\">)(GenericList *self, <span class=\"SHKeyword\">const int</span> numElements)</td></tr></table></div></div><div class=\"TTSummary\">Useful for reducing the number of memory reallocations if you know the final size of the list.&nbsp; Contents of the list will not be changed unless the new size is less than the current size.</div></div>",10:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PSymbols first\">*</td><td class=\"PName last\">set</td></tr></table></td><td class=\"PAfterParameters\">)(GenericList *self, <span class=\"SHKeyword\">const void</span> * <span class=\"SHKeyword\">const</span> newElements, <span class=\"SHKeyword\">const int</span> numElements)</td></tr></table></div></div><div class=\"TTSummary\">Sets the list with the given data, clearing any data that was previously held in the list.</div></div>",11:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype11\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PSymbols first\">*</td><td class=\"PName last\">setAt</td></tr></table></td><td class=\"PAfterParameters\">)(GenericList *self, <span class=\"SHKeyword\">const void</span> * <span class=\"SHKeyword\">const</span> newElements, <span class=\"SHKeyword\">const int</span> numElements, <span class=\"SHKeyword\">const int</span> index)</td></tr></table></div></div><div class=\"TTSummary\">Sets the selected elements in the list, up to the end of the list.</div></div>",13:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype13\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PSymbols first\">*</td><td class=\"PName last\">add</td></tr></table></td><td class=\"PAfterParameters\">)(GenericList *self, <span class=\"SHKeyword\">const void</span> * <span class=\"SHKeyword\">const</span> newElements, <span class=\"SHKeyword\">const int</span> numElements)</td></tr></table></div></div><div class=\"TTSummary\">Appends the given elements to the list</div></div>",14:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype14\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PSymbols first\">*</td><td class=\"PName last\">addAt</td></tr></table></td><td class=\"PAfterParameters\">)(GenericList *self, <span class=\"SHKeyword\">const void</span> * <span class=\"SHKeyword\">const</span> newElement, <span class=\"SHKeyword\">const int</span> numElements, <span class=\"SHKeyword\">const int</span> index)</td></tr></table></div></div><div class=\"TTSummary\">Inserts the given elements into the list</div></div>",15:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype15\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PSymbols first\">*</td><td class=\"PName last\">copyOtherBetween</td></tr></table></td><td class=\"PAfterParameters\">)(GenericList *self, <span class=\"SHKeyword\">const</span> GenericList * <span class=\"SHKeyword\">const</span> other, <span class=\"SHKeyword\">const int</span> startIndex, <span class=\"SHKeyword\">const int</span> endIndex)</td></tr></table></div></div><div class=\"TTSummary\">Copies the selected data from another GenericList.</div></div>",22:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype22\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span>* (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PSymbols first\">*</td><td class=\"PName last\">get</td></tr></table></td><td class=\"PAfterParameters\">)(<span class=\"SHKeyword\">const</span> GenericList * <span class=\"SHKeyword\">const</span> self, <span class=\"SHKeyword\">const int</span> index)</td></tr></table></div></div><div class=\"TTSummary\">Gets the selected element from the list.</div></div>",24:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype24\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PSymbols first\">*</td><td class=\"PName last\">contains</td></tr></table></td><td class=\"PAfterParameters\">)(<span class=\"SHKeyword\">const</span> GenericList * <span class=\"SHKeyword\">const</span> self, <span class=\"SHKeyword\">const void</span> * <span class=\"SHKeyword\">const</span> token)</td></tr></table></div></div><div class=\"TTSummary\">Returns true/false depending on if the given token is in the list. Searching will stop once the first instance is found.</div></div>",25:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype25\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PSymbols first\">*</td><td class=\"PName last\">getFirstIndexOf</td></tr></table></td><td class=\"PAfterParameters\">)(<span class=\"SHKeyword\">const</span> GenericList * <span class=\"SHKeyword\">const</span> self, <span class=\"SHKeyword\">const void</span> * <span class=\"SHKeyword\">const</span> token)</td></tr></table></div></div><div class=\"TTSummary\">Returns the first index of where token is in the list. If not present in the list, it returns -1.</div></div>",26:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype26\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PSymbols first\">*</td><td class=\"PName last\">getLastIndexOf</td></tr></table></td><td class=\"PAfterParameters\">)(<span class=\"SHKeyword\">const</span> GenericList * <span class=\"SHKeyword\">const</span> self, <span class=\"SHKeyword\">const void</span> * <span class=\"SHKeyword\">const</span> token)</td></tr></table></div></div><div class=\"TTSummary\">Returns the last index of where token is in the list. If not present in the list, it returns -1.</div></div>",27:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype27\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PSymbols first\">*</td><td class=\"PName last\">remove</td></tr></table></td><td class=\"PAfterParameters\">)(GenericList *self, <span class=\"SHKeyword\">const void</span> * <span class=\"SHKeyword\">const</span> token)</td></tr></table></div></div><div class=\"TTSummary\">Removes all instances of the supplied token from the list.</div></div>",28:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype28\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PSymbols first\">*</td><td class=\"PName last\">removeAt</td></tr></table></td><td class=\"PAfterParameters\">)(GenericList *self, <span class=\"SHKeyword\">const int</span> index)</td></tr></table></div></div><div class=\"TTSummary\">Removes the item at the supplied index from the list.</div></div>",60:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype60\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PSymbols first\">*</td><td class=\"PName last\">removeBetween</td></tr></table></td><td class=\"PAfterParameters\">)(GenericList *self, <span class=\"SHKeyword\">const int</span> startIndex, <span class=\"SHKeyword\">const int</span> endIndex)</td></tr></table></div></div><div class=\"TTSummary\">Removes the items between the supplied indexes.</div></div>",53:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype53\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PSymbols first\">*</td><td class=\"PName last\">trimToSize</td></tr></table></td><td class=\"PAfterParameters\">)(GenericList *self)</td></tr></table></div></div><div class=\"TTSummary\">Reallocates the internal memory so that numElements==listSize.&nbsp; If strictAlloc is true then this function has no purpose, as numElements and listSize are always the same when strictAlloc is true.</div></div>",62:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype62\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PSymbols first\">*</td><td class=\"PName last\">clear</td></tr></table></td><td class=\"PAfterParameters\">)(GenericList *self)</td></tr></table></div></div><div class=\"TTSummary\">Removes all elements from the list.</div></div>",63:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype63\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PSymbols first\">*</td><td class=\"PName last\">isEmpty</td></tr></table></td><td class=\"PAfterParameters\">)(<span class=\"SHKeyword\">const</span> GenericList * <span class=\"SHKeyword\">const</span> self)</td></tr></table></div></div><div class=\"TTSummary\">Returns true or false depending on weather the list is empty or not.</div></div>",64:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype64\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PSymbols first\">*</td><td class=\"PName last\">equals</td></tr></table></td><td class=\"PAfterParameters\">)(<span class=\"SHKeyword\">const</span> GenericList * <span class=\"SHKeyword\">const</span> self, <span class=\"SHKeyword\">const</span> GenericList * <span class=\"SHKeyword\">const</span> other)</td></tr></table></div></div><div class=\"TTSummary\">Returns true/false depending if the two lists are equal.</div></div>"});