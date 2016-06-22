# Test app for Heckathon-1 from Ericsson Testing SMS

This is a quick app cobbled together for the purposes of demonstrating a basic CI/CD workflow with Docker Hub on using Amazon Cloud.
All the Open Source Tools used. Hence the cost is Zero.

## Instructions for use

1. Prepare all Code Files.
2. Move code files from Local to GitHub (using GitBash or DesktopGit).
3. Initializing a Git repo and making a remote of it on GitHub.
4. Need to have account on - GitHUb, CircleCI, Docker Hub, Tutum and AWS.
5. Trigger Token = 8911853e-9e64-46f1-b70d-ffedeaa775f6
6. Trigger URL = https://registry.hub.docker.com/u/sajithamarnath/hackathon-1/trigger/8911853e-9e64-46f1-b70d-ffedeaa775f6/
7. Curl Site = curl -H "Content-Type: application/json" --data '{"build":true}' -X POST 
8. Redirect URL - https://cloud.docker.com/api/app/v1/service/11c55b00-daeb-4b70-bd47-88f563cd1ee7/trigger/4afbf2f1-c0f4-499a-99d4-7b308568eb35/call/
9. OpsGenie API Key: ad4c1c06-655c-4503-92f3-0c0163cb0529
10. OpsGenie URL: https://api.opsgenie.com/v1/json/circleci?apiKey=ad4c1c06-655c-4503-92f3-0c0163cb0529
