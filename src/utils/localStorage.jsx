const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    taskCount: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Optimization",
        taskDescription: "Analyze and optimize the existing SQL queries.",
        taskDate: "2024-10-15",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Cloud Deployment",
        taskDescription: "Deploy the application on AWS cloud.",
        taskDate: "2024-09-30",
        category: "Cloud",
      },
    ],
  },
  {
    id: 2,
    firstName: "Diya",
    email: "e2@e.com",
    password: "123",
    taskCount: { active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "UI Design",
        taskDescription: "Create a new user-friendly interface.",
        taskDate: "2024-10-20",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Fix critical bugs in the payment module.",
        taskDate: "2024-09-25",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate third-party APIs for email notifications.",
        taskDate: "2024-10-10",
        category: "Development",
      },
    ],
  },
  {
    id: 3,
    firstName: "Surya",
    email: "s@s.com",
    password: "123",
    taskCount: { active: 1, newTask: 2, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Security Audit",
        taskDescription: "Perform a security audit on the web application.",
        taskDate: "2024-10-18",
        category: "Security",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Docker Setup",
        taskDescription: "Set up a Docker environment for testing.",
        taskDate: "2024-09-29",
        category: "DevOps",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review the code for the new feature release.",
        taskDate: "2024-10-05",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Migration",
        taskDescription: "Migrate the legacy system to the new framework.",
        taskDate: "2024-10-12",
        category: "Migration",
      },
    ],
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskCount: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Marketing Campaign",
        taskDescription: "Plan and execute a new email campaign.",
        taskDate: "2024-10-22",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Social Media Monitoring",
        taskDescription: "Monitor the brand’s social media presence.",
        taskDate: "2024-09-28",
        category: "Marketing",
      },
    ],
  },
  {
    id: 5,
    firstName: "Kabir",
    email: "employee5@example.com",
    password: "123",
    taskCount: { active: 1, newTask: 2, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Customer Feedback Analysis",
        taskDescription: "Analyze feedback from recent surveys.",
        taskDate: "2024-10-21",
        category: "Customer Service",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Training Session",
        taskDescription: "Conduct a training session for new employees.",
        taskDate: "2024-09-18",
        category: "HR",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Policy Update",
        taskDescription: "Update the employee handbook with new policies.",
        taskDate: "2024-10-03",
        category: "HR",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Performance Review",
        taskDescription: "Review the performance of team members.",
        taskDate: "2024-10-11",
        category: "HR",
      },
    ],
  },
];

  

  const admin = {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }

  export const setLocalStorage =()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }
  export const getLocalStorage =()=>{
    const employees =JSON.parse(localStorage.getItem('employees'))
    const admin =JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}

  }
  