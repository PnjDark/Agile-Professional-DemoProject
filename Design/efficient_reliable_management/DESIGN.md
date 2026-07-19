---
name: Efficient & Reliable Management
colors:
  surface: '#faf8ff'
  surface-dim: '#d9d9e5'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3fe'
  surface-container: '#ededf9'
  surface-container-high: '#e7e7f3'
  surface-container-highest: '#e1e2ed'
  on-surface: '#191b23'
  on-surface-variant: '#434655'
  inverse-surface: '#2e3039'
  inverse-on-surface: '#f0f0fb'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fc'
  on-secondary-container: '#57657a'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d5e3fc'
  secondary-fixed-dim: '#b9c7df'
  on-secondary-fixed: '#0d1c2e'
  on-secondary-fixed-variant: '#3a485b'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#faf8ff'
  on-background: '#191b23'
  surface-variant: '#e1e2ed'
  status-todo: '#94A3B8'
  status-progress: '#F59E0B'
  status-done: '#10B981'
  priority-high: '#EF4444'
  priority-medium: '#F97316'
  priority-low: '#3B82F6'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max-width: 1280px
  gutter: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 2rem
  stack-gap: 1rem
  section-gap: 2.5rem
---

# UI Prompts

This document defines the user-facing prompts, labels, and interface text for the To-Create application.

## Login Screen

- Heading: "Welcome Back"
- Subheading: "Log in to access your projects and tasks"
- Email label: "Email address"
- Password label: "Password"
- Button: "Log In"
- Link text: "Don't have an account? Register"
- Error message: "Invalid email or password. Please try again."
- Forgot password link: "Forgot your password?"

## Registration Screen

- Heading: "Create Your Account"
- Subheading: "Register to start managing tasks and projects"
- Name label: "Full name"
- Email label: "Email address"
- Password label: "Password"
- Confirm password label: "Confirm password"
- Role dropdown label: "Select your role"
- Role options: "Administrator", "Project Manager", "Team Member"
- Button: "Register"
- Link text: "Already have an account? Log in"
- Success message: "Registration successful. Please log in."
- Error message: "Please fix the highlighted fields to continue."

## Dashboard Screen

- Heading: "Project Dashboard"
- Subheading: "Overview of your active projects and tasks"
- Button: "Create Project"
- Button: "Create Task"
- Section title: "My Projects"
- Section title: "Assigned Tasks"
- Section title: "Recent Activity"
- Label: "Project status"
- Label: "Task priority"
- Search placeholder: "Search projects or tasks"
- Filter label: "Filter by"
- Filter options: "Status", "Priority", "Project", "Role"

## Project Creation

- Heading: "New Project"
- Project name label: "Project name"
- Description label: "Project description"
- Objectives label: "Project objectives"
- Button: "Save Project"
- Button: "Cancel"
- Help text: "Enter the project goal and objectives for better task generation."
- Success message: "Project created successfully."

## Task Management

- Heading: "Task Details"
- Task title label: "Task title"
- Description label: "Task description"
- Priority label: "Priority"
- Priority options: "High", "Medium", "Low"
- Status label: "Status"
- Status options: "To Do", "In Progress", "Done"
- Due date label: "Due date"
- Assigned to label: "Assigned to"
- Role label: "Role"
- Button: "Save Task"
- Button: "Delete Task"
- Button: "Cancel"
- Confirmation text: "Are you sure you want to delete this task?"

## Task List and Filters

- Heading: "Task List"
- Button: "Add Task"
- Button: "Edit"
- Button: "Complete"
- Button: "Remove"
- Filter placeholder: "Filter tasks"
- Sort options: "Newest first", "Oldest first", "Priority", "Status"
- Empty state: "No tasks found. Create a new task to get started."

## Role-Based Access and Permissions

- Heading: "User Roles"
- Role management label: "Manage user roles"
- Table headings: "Name", "Email", "Role", "Actions"
- Button: "Assign Role"
- Button: "Update Role"
- Info text: "Roles determine what each team member can view and manage."

## Responsive Interface

- Mobile header: "To-Create"
- Mobile menu items: "Dashboard", "Projects", "Tasks", "Settings"
- Button text: "Menu"
- Responsive hint: "Swipe or tap to access navigation"

## Alerts and Notifications

- Notification title: "Notifications"
- Notification example: "New task assigned: Prepare presentation"
- Notification action: "View task"
- Success alert: "Changes saved successfully."
- Warning alert: "Please review required fields."
- Error alert: "Something went wrong. Please retry."

## Accessibility and Usability

- Button label: "Help"
- Tooltip example: "This task is assigned to your role."
- Accessibility note: "Use clear labels and high contrast for easy navigation."
