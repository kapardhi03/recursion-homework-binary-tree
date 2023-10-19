const createNode = (value) => {
    return {
        value: value,
        left: null,
        right: null,
    }
}

// const depthFirstInsert = (root, value) => {
//     if (root.value === value || !value)
//         return root;

//     // insert on the left side of the tree
//     if (value < root.value) {
//         if (root.left) {
//             return depthFirstInsert(root.left, value);
//         } else {
//             root.left = createNode(value);
//             return root;
//         }
//     }

//     // insert on the right side of the tree
//     if (root.value < value) {
//         if (root.right) {
//             return depthFirstInsert(root.right, value);
//         } else {
//             root.right = createNode(value);
//             return root;
//         }
//     }
// }

const depthFirstInsert = (root, value) => {
    if (!root) {
        return createNode(value);
    }

    let current = root;

    while (true) {
        if (value === current.value || !value) {
            break;
        }

        if (value < current.value) {
            if (current.left) {
                current = current.left;
            } else {
                current.left = createNode(value);
                break;
            }
        } else if (current.value < value) {
            if (current.right) {
                current = current.right;
            } else {
                current.right = createNode(value);
                break;
            }
        }
    }

    return root;
};


// const breadthFirstTraverse = (root) => {
//     let collector = [];
//     let q = [root]

//     while (q.length > 0) {
//         let first = q.shift();
//         collector.push(first.value);
//         if (first.left)
//             q.push(first.left);

//         if (first.right)
//             q.push(first.right);
//     }

//     return collector;
// };
const breadthFirstTraverseRecursive = (queue, collector) => {
    if (queue.length === 0) {
        return collector;
    }

    const first = queue.shift();
    collector.push(first.value);

    if (first.left) {
        queue.push(first.left);
    }

    if (first.right) {
        queue.push(first.right);
    }

    return breadthFirstTraverseRecursive(queue, collector);
};

const breadthFirstTraverse = (root) => {
    return breadthFirstTraverseRecursive([root], []);
};

module.exports = { depthFirstInsert, breadthFirstTraverse, createNode };