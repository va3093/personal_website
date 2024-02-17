#!/bin/bash

# Set variables
ECR_REPOSITORY=personal_website
AWS_ACCOUNT_ID=280234999449
AWS_REGION=eu-west-1
COMMIT_HASH=$(git rev-parse --short HEAD)


# Login to AWS ECR
aws ecr get-login-password --profile wilhelm --region $AWS_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com

# Build the Docker image
docker build --platform linux/amd64 -t $ECR_REPOSITORY:$COMMIT_HASH .

# Tag the image for the ECR repository
docker tag $ECR_REPOSITORY:$COMMIT_HASH $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:$COMMIT_HASH
docker tag $ECR_REPOSITORY:$COMMIT_HASH $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:latest

# Push the image to AWS ECR
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:$COMMIT_HASH
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:latest
