import Example from './../cmp/Example.svelte';
import {Nav} from './../../../cmp/index';


# Nav

<Example>
    <div slot="text">
        <Nav>
            <a slot="left" class="active" href="/">Link 1</a>
            <a slot="left" href="/">Link 2</a>
            <a slot="center" href="/" class="brand">LOGO</a>
            <a slot="right" href="/">Link 3</a>
            <a slot="right" href="/">Link 4</a>   
        </Nav>
    </div>
    <div slot="code">
        ```html
        <Nav>
            <a slot="left" class="active" href="/">Link 1</a>
            <a slot="left" href="/">Link 2</a>

            <a slot="center" href="/" class="brand">LOGO</a>
            
            <a slot="right" href="/">Link 3</a>
            <a slot="right" href="/">Link 4</a>   
        </Nav>
        ```
    </div>
</Example>

<Example>
    <div slot="text">
        <Nav>
            <a slot="left" href="/" class="brand">LOGO</a>
            <a slot="left" class="active" href="/">Link 1</a>
            <a slot="left" href="/">Link 2</a>  
        </Nav>
    </div>
    <div slot="code">
        ```html
        <Nav>
            <a slot="left" href="/" class="brand">LOGO</a>
            <a slot="left" class="active" href="/">Link 1</a>
            <a slot="left" href="/">Link 2</a>  
        </Nav>
        ```
    </div>
</Example>