# Github Repository Explorer

This Project is a application task from simple system.

I want to showcase how I structure my codebase with a way bigger project scope in mind.
This is "overkill" for the task itself. Please keep in mind to just solve the task the implementation would be less complex and smaller.

# Getting starting

## cloning and running dev server locally
```shell
git clone https://github.com/atothek1/simple-system-github-explorer 
cd simple-system-github-explorer
npm run i
npm run dev
```

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

- integrataion of I18N, would bloatup the solution even more, but in big projects a MUST
- usage of a Router like React Router or TanStack Router, same as for I18N, 
- a complex state mangement with Redux, RxJS or a like, have not the need for it,
- End 2 End test with Cypress or playwright

## what you can find:

- basic design system, seperated UI components from domain specific compositional components
- usage of Typescript
- usage of react, swr, react-hook-form, preact-signals, styled-components, vitest, react testing library
- usage of hooks
- seperation of concerns for data fetching, transforming, caching integration and presentation


# UI Slice Down

![Component Slicedown](/docs/img/ui-slicedown.png "UI design sliced down to components")

From the UI slicedown I have identified some UI Design System components as well as some Domain specific components.

This slicedown will not represent a full list of all components just an indidcator to help getting a structure into the UI.

# Project Sstructure

<pre>
src/
  |-- api/          # contains framework agnostic data fetching and resolving
  | |-- fetcher/     # contains specific data fetchers
  | |-- resolver/   # contains specific response resolver to transform 
  | |                 response data into a clean data model
  |-- components/   # contains all components
  | |-- project/    # contains project specific components
  | |-- ui/         # contains project agnostic somponents, building blocks
  |-- hooks/        # project relevant hooks, wrapping useSWR
  |-- state/        # simple states with preact signals
</pre>


# Workflow

## Git
I have not worked on the project with feature branches and pull requests. In a professional environment I would 
follow the guidelines, and definitly prefer to work with feature branches and Pull request. After successfull CI pipeline and Review i would merge.

## Testing

I have wrote only a small set of test for the more complexer parts. Also they are not 100% complete, I just wanted to show how to write integrate testing into a project.



# Resources that i have read

- https://www.robinwieruch.de/vitest-react-testing-library/


# NPM scripts

## run dev server
```shell
npm run dev
```

## run build
```shell
npm run build
```

## run tests
```shell
npm run test
```

## run linting
```shell
npm run lint
```

## run type checking
```shell
npm run type-check
```

## run lint, test, type.check and build in one command
```shell
npm run ci
```
