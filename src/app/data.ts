// Interfaces (strong typing ✔️)
export interface CoreConcept {
  image: string;
  title: string;
  description: string;
}

// =======================
// CORE CONCEPTS (Cards)
// =======================
export const CORE_CONCEPTS: CoreConcept[] = [
  {
    image: '/assets/components.png',
    title: 'Components',
    description:
      'Components are the main building blocks of Angular applications. They control a part of the UI.'
  },
  {
    image: 'assets/jsx-ui.png',
    title: 'Templates',
    description:
      'Templates define the view of a component using HTML enhanced with Angular syntax.'
  },
  {
    image: 'assets/config.png',
    title: 'Directives',
    description:
      'Directives add behavior to existing DOM elements. Angular 17 introduces the new control flow syntax.'
  },
  {
    image: 'assets/state-mgmt.png',
    title: 'Services',
    description:
      'Services are used to share logic and data across components using dependency injection.'
  }
];

// =======================
// EXAMPLES (Tabs content)
// =======================
export const EXAMPLES = [
  {
    title: 'Angular Components',
    description: 'A simple standalone component example.',
    code: `
@Component({
  selector: 'app-example',
  standalone: true,
  template: '<h2>Hello Angular</h2>',
})
export class ExampleComponent {}
    `
  },

  {
    title: 'Templates',
    description: 'Using interpolation and property binding.',
    code: `
<h1>{{ title }}</h1>
<img [src]="imageUrl" />
    `
  },

  {
    title: 'Control Flow',
    description: 'Using the new Angular 17 control flow syntax.',
    code: `
@if (isVisible) {
  <p>Visible content</p>
} @else {
  <p>Hidden content</p>
}
    `
  },

  {
    title: 'Services',
    description: 'A simple Angular service.',
    code: `
@Injectable({ providedIn: 'root' })
export class DataService {
  getData() {
    return ['Angular', 'React', 'Vue'];
  }
}
    `
  }
];
