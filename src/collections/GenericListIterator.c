#include <stdlib.h>
#include <string.h>
#include "GenericListIterator.h"

static void constructor(void *obj);
static int comparator(const void *first, const void *second, size_t size);

const struct GenericListIterator_t GenericListIterator_t={
	.class={
		.allocator=malloc,
		.constructor=constructor,
		.copyConstructor=memcpy,
		.comparator=comparator,
		.destructor=NULL,
	},
};

//Class Methods================================================================
static void constructor(void *obj){
	GenericListIterator *gliObj=(GenericListIterator*)obj;
	gliObj->index=0;
}

static int comparator(const void *first, const void *second, size_t size){
	GenericListIterator *self=(GenericListIterator*)first;
	GenericListIterator *other=(GenericListIterator*)second;
	if (self->index==other->index){
		return 0;
	} else if (self->index<other->index){
		return -1;
	} else {
		return 1;
	}
}
