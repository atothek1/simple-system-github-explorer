# Github Repository Explorer

This Project is a application task from simple system.

I want to showcase how I structure my codebase with a way bigger project scope in mind.
This is "overkill" for the task itself. Please keep in mind to just solve the task the implementation would be less complex and smaller.

# Project planning

The below plan is NOT a step by step workflow, a lot of steps are overlapping and can take more or less time. It should just help to understand what I have in mind.

| Time | Description |
| --- | --- |
| 1 D | Understanding the task, brainstorming what I want to achieve and what libraries to use, UI Slicedown,  |
| 1/2 D | PoCs of different ideas and libraries i have in mind to use |
| 1/2 D | Project setup and infrastructure |
| 2-3 D | Implementing the Project, writing Test and deployment |
| 1 D | Polishing, Bugfixing & Documentation |

# Decision Log

Here you can find a log of decision of what to do and what NOT to do. As well as some explanations for libraries i have choosen.

## what you can NOT expect

- integrataion of I18N
- usage of a Router like React Router or TanStack Router
- a complex state mangement with Redux, RxJS or a like
- End 2 End test with Cypress or playwright

## what you can find:

- basic design system, seperated UI components from domain specific compositional components
- usage of Typescript
- usage of react, swr, react-hook-form, preact-signals, styled-components, jest, react testing library
- usage of hooks
- seperation of concerns for data fetching, transforming, caching integration and presentation


# UI Slice Down

![Component Slicedown](/docs/img/ui-slicedown.png "UI design sliced down to components")

From the UI slicedown I have identified some UI Design System components as well as some Domain specific components.

This slicedown will not represent a full list of all components just an indidcator to help getting a structure into the UI.
