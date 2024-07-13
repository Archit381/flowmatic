'use server'

import { db } from "@/lib/db"

export const onCreateNodesEdges = async(
    flowId: string,
    nodes: string,
    edges: string,
    flowPath: string
)=>{
    const flow = await db.workflows.update({
        where: {
            id: flowId,
        },
        data: {
            nodes,
            edges,
            flowPath: flowPath,
        }
    })

    if(flow) return {message: 'Flow Saved'}
}

export const onFlowPublish = async (worflowId: string, state: boolean)=>{
    console.log(state)
    const published = await db.workflows.update({
        where: {
            id: worflowId
        },
        data: {
            publish: state
        }
    })

    if(published.publish) return "WorkFlow Published"
    return 'Workflow Unpublished'
}