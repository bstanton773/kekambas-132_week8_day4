import { Canvas, Component, RightLeaningContainer, CircleContainer } from './Widget';

const canvas = new Canvas(document.body);
console.log(canvas);

const firstComponent = new Component();

canvas.addComponent(firstComponent);

// Create a new component with a Right Leaning Shape and move it around
const rightComponent = new Component();
rightComponent.shape = new RightLeaningContainer();
rightComponent.locationLeft = 8;
rightComponent.locationTop = 3;
rightComponent.width = 3;
rightComponent.height = 3;

canvas.addComponent(rightComponent);

// Create a new component with a Circle container
const circleComponent = new Component();
circleComponent.shape = new CircleContainer();
circleComponent.locationLeft = 4;
circleComponent.locationTop = 4;

canvas.addComponent(circleComponent);
