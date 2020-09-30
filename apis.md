## API callsz

### Login
1. GET /v4/
2. GET /v4/collections
3. GET /v4/collections/$collectionId
4. GET /v4/pipelines/$pipelineId/metrics?count=20&page=1

### Load
1. GET /v4/collections
2. GET /v4/banners
3. GET /v4/pipelines/$pipelineId/jobs
4. GET /v4/pipelines/$pipelineId/triggers
5. GET /v4/pipelines/$pipelineId/events?count=5&page=1
6. Run for all eventids: GET /v4/events/$eventId/builds
7. GET /v4/events/$eventId

### Start

1. POST v4/events
```
{
    "pipelineId": "$pipelineId",
    "startFrom": "~commit",
    "causeMessage": "Manually started by pritamstyz4ever"
}
```
2. GET /v4/pipelines/$pipelineId/jobs
3. GET /v4/pipelines/$pipelineId/triggers
4. GET /v4/pipelines/$pipelineId/events?count=5&page=1
5. GET /v4/events/$eventId/builds
6. GET /v4/events/$eventId

### Metrics
1. GET /pipelines/$pipelineId/metrics
2. GET /v4/pipelines/$pipelineId/metrics?endTime=2020-09-28T15%3A27&startTime=2020-08-28T15%3A27
3. GET /v4/pipelines/$pipelineId/metrics?endTime=2020-09-28T15%3A28&startTime=2020-06-28T15%3A28

# Secrets
1. GET /v4/pipelines/$pipelineId/secrets
2. GET /v4/pipelines/$pipelineId/tokens

# List View
1. GET /v4/builds/statuses?jobIds=34416&jobIds=34415&jobIds=34414&jobIds=34413&jobIds=34412&jobIds=34411&jobIds=34410&jobIds=34409&jobIds=34408&jobIds=$jobId&numBuilds=5&offset=0
2. Run for all jobs: GET /v4/coverage/info?jobId=$jobId&buildId=$buildId&startTime=2020-09-28T14%3A42%3A01.494Z&endTime=2020-09-28T14%3A43%3A06.345Z&prNum=&jobName=deploy16&pipelineName=pritamstyz4ever%2Fsd-sample-build&prParentJobId=
3. Run for all builds GET /v4/coverage/info?jobId=34408&buildId=550895&startTime=&endTime=&prNum=&jobName=deploy15&pipelineName=pritamstyz4ever%2Fsd-sample-build&prParentJobId=

# Running Build View
1. GET /v4/builds/$buildId/steps/sd-setup-launcher/logs?from=0&pages=10&sort=ascending --- call few times
2. GET /v4/coverage/info?buildId=550862&jobId=25707&startTime=2020-09-30T03%3A49%3A55.756Z&endTime=2020-09-30T03%3A52%3A47.656Z&pipelineId=4629&prNum=&jobName=deploy&pipelineName=pritamstyz4ever%2Fsd-sample-build&projectKey=
3. PUT /v4/builds/$buildId
```
{ status: "ABORTED" }
```