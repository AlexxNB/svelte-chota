# Utilites

[chota](https://jenil.github.io/chota/) has very useful CSS classes. You can apply these helper classes to almost any element in order to alter its style.


* `text-primary` - <span class="text-primary">Primary text</span>
* `text-light` - <span class="text-light">Light text</span>
* `text-white` - <span class="bg-primary text-white">White text</span>
* `text-dark` - <span class="text-dark">Dark text</span>
* `text-grey` - <span class="text-grey">Grey text</span>
* `text-error` - <span class="text-error">Error text</span>
* `text-success` - <span class="text-success">Success text</span>
* `bg-primary` - <span class="bg-primary">primary background</span>
* `bg-light` - <span class="bg-light">Light background</span>
* `bg-dark` - <span class="bg-dark">Dark background</span>
* `bg-grey` - <span class="bg-grey">Grey background</span>
* `bg-error` - <span class="bg-error">Error background</span>
* `bg-success` - <span class="bg-success">Success background</span>
* `bd-primary` - <span class="bd-primary">primary border</span>
* `bd-light` - <span class="bd-light">Light border</span>
* `bd-dark` - <span class="bd-dark">Dark border</span>
* `bd-grey` - <span class="bd-grey">Grey border</span>
* `bd-error` - <span class="bd-error">Error border</span>
* `bd-success` - <span class="bd-success">Success border</span>
* `pull-right` - floats an element to the right
* `pull-left` - floats an element to the left
* `text-center` - center aligns text
* `text-left` - left aligns text
* `text-right` - right aligns text
* `text-justify` - justify aligns text
* `text-uppercase` - text to uppercase
* `text-lowercase` - text to lowercase
* `text-capitalize` - capitalizes text
* `is-full-screen` - makes the element 100% view height
* `is-full-width` - make the element 100% width
* `is-vertical-align` - vertically centers element using flex
* `is-horizontal-align` - horizontal centers element using flex
* `is-center` - centers element using flex
* `is-right` - right aligns element using flex
* `is-left` - left aligns element using flex
* `is-fixed` - fixed positioned element
* `is-paddingless` - removes any padding
* `is-marginless` - removes any margin
* `is-rounded` - make the element round
* `clearfix` - clears the floats
* `is-hidden` - hides the element completely
* `hide-xs` - hides the element for screens &lt;600px
* `hide-sm` - hides the element for screens &gt;=600px and &lt;900px
* `hide-md` - hides the element for screens &gt;=900px and &lt;1200px
* `hide-lg` - hides the element for screens &gt;=1200px
* `hide-pr` - hides the element for printing


<style>

ul{
    --color-primary: #14854F;
        --color-lightGrey: #d2d6dd;
        --color-grey: #747681;
        --color-darkGrey: #3f4144;
        --color-error: #d43939;
        --color-success: #28bd14;
}

/* Colors */
.bg-primary {
    background-color: var(--color-primary) !important;
}

.bg-light {
    background-color: var(--color-lightGrey) !important;
}

.bg-dark {
    background-color: var(--color-darkGrey) !important;
}

.bg-grey {
    background-color: var(--color-grey) !important;
}

.bg-error {
    background-color: var(--color-error) !important;
}

.bg-success {
    background-color: var(--color-success) !important;
}

.bd-primary {
    border: 1px solid var(--color-primary) !important;
}

.bd-light {
    border: 1px solid var(--color-lightGrey) !important;
}

.bd-dark {
    border: 1px solid var(--color-darkGrey) !important;
}

.bd-grey {
    border: 1px solid var(--color-grey) !important;
}

.bd-error {
    border: 1px solid var(--color-error) !important;
}

.bd-success {
    border: 1px solid var(--color-success) !important;
}

.text-primary {
    color: var(--color-primary) !important;
}

.text-light {
    color: var(--color-lightGrey) !important;
}

.text-dark {
    color: var(--color-darkGrey) !important;
}

.text-grey {
    color: var(--color-grey) !important;
}

.text-error {
    color: var(--color-error) !important;
}

.text-success {
    color: var(--color-success) !important;
}

.text-white {
    color: #fff !important;
}
</style>