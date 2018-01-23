import faker from 'faker';

// test data
const data = {
    activeList: [
        {
            id: faker.random.uuid(),
            title: faker.name.jobTitle(),
            description: faker.name.jobDescriptor(),
            create_at: faker.date.past()
        },
        {
            id: faker.random.uuid(),
            title: faker.name.jobTitle(),
            description: faker.name.jobDescriptor(),
            create_at: faker.date.past()
        },
        {
            id: faker.random.uuid(),
            title: faker.name.jobTitle(),
            description: faker.name.jobDescriptor(),
            create_at: faker.date.past()
        },
        {
            id: faker.random.uuid(),
            title: faker.name.jobTitle(),
            description: faker.name.jobDescriptor(),
            create_at: faker.date.past()
        },
        {
            id: faker.random.uuid(),
            title: faker.name.jobTitle(),
            description: faker.name.jobDescriptor(),
            create_at: faker.date.past()
        },
        {
            id: faker.random.uuid(),
            title: faker.name.jobTitle(),
            description: faker.name.jobDescriptor(),
            create_at: faker.date.past()
        },
        {
            id: faker.random.uuid(),
            title: faker.name.jobTitle(),
            description: faker.name.jobDescriptor(),
            create_at: faker.date.past()
        },
        {
            id: faker.random.uuid(),
            title: faker.name.jobTitle(),
            description: faker.name.jobDescriptor(),
            create_at: faker.date.past()
        },
        {
            id: faker.random.uuid(),
            title: faker.name.jobTitle(),
            description: faker.name.jobDescriptor(),
            create_at: faker.date.past()
        },
        {
            id: faker.random.uuid(),
            title: faker.name.jobTitle(),
            description: faker.name.jobDescriptor(),
            create_at: faker.date.past()
        },
        {
            id: faker.random.uuid(),
            title: faker.name.jobTitle(),
            description: faker.name.jobDescriptor(),
            create_at: faker.date.past()
        },
        {
            id: faker.random.uuid(),
            title: faker.name.jobTitle(),
            description: faker.name.jobDescriptor(),
            create_at: faker.date.past()
        }
    ]
};

data.filterItems = [];

export default function todoList(state = data, action) {
    switch (action.type) {
        case 'FILTER':
            return Object.assign({}, state, {
                filterList: action.filterItems.length ? action.filterItems : ['no items']
            });
        default:
            return state
    }
}