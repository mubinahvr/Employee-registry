# Children Prop Notes

1. The `children` prop contains whatever JSX is placed between a component's opening and closing tags.
2. It makes wrapper components reusable because the wrapper does not need to know the exact content it will contain.
3. `PageLayout` receives `Header`, `MainContent`, and `Footer` through `children`.
4. This is composition: a parent component provides structure while callers decide what content is placed inside it.
