export default function Todo({ task, isDone }) {

    return <h2>task: {task} ({isDone ? 'finished':'unfinished'})</h2>
    // if (isDone) {

    // } else {
    //     return <h2>task: {task}(unfinished)</h2>;

    // }
}