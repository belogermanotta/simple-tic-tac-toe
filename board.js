module.exports = {
    print: (states, size) => {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                let state = states[j + i * size];
                let value = j + i * size + 1;
                if (state == 1) {
                    value = 'x';
                } else if (state == -1) {
                    value = 'o';
                }
                process.stdout.write(" | " + value + " | ");
            }
            process.stdout.write("\n");
            for (let j = 0; j < size; j++) {
                process.stdout.write("-------");
            }
            process.stdout.write("\n");
        }
    },
};