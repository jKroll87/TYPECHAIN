const createVideo = (id: number, name?: string): void => {
    console.log(`Video which id is ${id}, name is ${name} is created.`);
}

createVideo(1, "LOL");
createVideo(1);