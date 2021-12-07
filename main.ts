import {V1Deployment, useGetDeploymentQuery} from './types';
async function main() {
    useGetDeploymentQuery({onCompleted: (data) => {
let foo: V1Deployment;
foo = data.getDeployment


    }});

    }

main();
