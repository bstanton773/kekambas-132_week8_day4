import { Canvas, Component } from './Widget';

const canvas = new Canvas(document.body);
console.log(canvas);

const firstComponent = new Component();

canvas.addComponent(firstComponent);
