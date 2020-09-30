# raptor
Load test scripts for Screwdriver API


# running the load test
1. Set the env variables $SD_TOKEN, $PIPLINE_ID
2. Set the environment to staging or production
3. Run artillery

### Artillery
```
#Install
npm install -g artillery

# Run test
artillery run --output report.html load-script.yaml

# Run with env
artillery run --environment staging --output report.html load-script.yaml
artillery run --environment production --output report.html load-script.yaml

```
### Results
Output is generated in report.html
