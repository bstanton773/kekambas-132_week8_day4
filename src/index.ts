import { Canvas, Component, RightLeaningContainer, CircleContainer } from './Widget';

const canvas = new Canvas(document.body);
console.log(canvas);

canvas.state = {firstName: 'Brian', lastName: 'Stanton', city: 'Chicago'}

const firstComponent = new Component();
firstComponent.content = "<h1>Hello {{ firstName }} {{ lastName }} </h1>"

canvas.addComponent(firstComponent);

// Create a new component with a Right Leaning Shape and move it around
const rightComponent = new Component();
rightComponent.shape = new RightLeaningContainer();
rightComponent.locationLeft = 8;
rightComponent.locationTop = 3;
rightComponent.width = 3;
rightComponent.height = 3;
rightComponent.content = '<h1>Hello World</h1>'
// rightComponent.shape.zIndex = 10;

canvas.addComponent(rightComponent);

// Create a new component with a Circle container
const circleComponent = new Component();
circleComponent.shape = new CircleContainer();
circleComponent.locationLeft = 7;
circleComponent.locationTop = 4;
circleComponent.content = "<h3>{{ city }}</h3>"

canvas.addComponent(circleComponent);

canvas.state = {city: 'Detroit'};
