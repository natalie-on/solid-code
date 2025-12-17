# SOLID Principle

This repository contains examples and refactoring exercises demonstrating the SOLID design principles. The project is divided into five separate folders, each corresponding to one of the principles.

## Project Structure

Each folder operates as an independent module with its own source code and tests.

```text
solid/
├── solidone/       # Single Responsibility Principle (SRP)
├── solidtwo/       # Open/Closed Principle (OCP)
├── solidthree/     # Liskov Substitution Principle (LSP)
├── solidfour/      # Interface Segregation Principle (ISP)
└── solidfive/      # Dependency Inversion Principle (DIP)
└── README.md
```

## How to Run

Every folder in this project follows the same standard workflow. To run or test a specific principle, navigate into its folder and use the following commands.

1. Build the Project

Compiles the TypeScript code into JavaScript.
```bash
cd solidone  # (Or any other folder: solidtwo, solidthree, etc.)
npm run build
```

2. Run the Application

Executes the compiled code.
```bash
npm run start
```

3. Run Tests

Executes the Jest test suite for that specific principle.
```bash
npm run test
```

## Prerequisites
- Node.js: Ensure Node.js is installed.

- Dependencies: run ``npm install`` inside each folder before running the commands for the first time.