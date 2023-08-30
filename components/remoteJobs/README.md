# Remote Jobs page

fetch and show data

## url

```
  /remote-jobs
```

## Store Action Api

```
  jobs/GET_JOBS
```

## Functions

| function          | Description                          |
| :---------------- | :----------------------------------- |
| `joinInovola`     | Open Application To Apply In Inovola |
| `moveToGlassdoor` | OPen Glassdoor Reviews               |
| `onResize`        | Resizeing                            |
| `resize`          | resize                               |
| `removeResize`    | Remove Resize                        |
| `searchForJobs`   | To Search For Job At Inovola         |

## components

| component                                          | Description                        |
| :------------------------------------------------- | :--------------------------------- |
| [jobs](./jobs.vue)                                 | shows all jobs Section             |
| [JobDetails](./JobDetails.vue)                     | shows Job Details Section          |
| [staticJobDescription](./staticJobDescription.vue) | shows staticJobDescription Section |
| [glassdoorSection](./glassdoorSection.vue)         | shows glassdoor Section            |
| [applyNow](./applyNow.vue)                         | shows applyNow Section             |
