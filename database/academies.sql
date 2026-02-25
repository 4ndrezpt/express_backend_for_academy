CREATE DATABASE IF NOT EXISTS academies;
USE academies;

DROP TABLE IF EXISTS academies;
CREATE TABLE IF NOT EXISTS academies(
    id INT AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL,
    phone VARCHAR(20),
    address VARCHAR(255),
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS courses(
    id INT AUTO_INCREMENT,
    name VARCHAR(255),
    description VARCHAR(255),
    academy_id INT,
    start DATE DEFAULT "2025-01-20",
    finish DATE DEFAULT "2025-05-20",
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS courses_x_academy(
    academy_id INT,
    course_id INT,
    FOREIGN KEY (academy_id) REFERENCES academies(id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(id)
        ON UPDATE CASCADE ON DELETE CASCADE
);
DROP TABLE IF EXISTS teachers;
CREATE TABLE IF NOT EXISTS teachers(
    id INT AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS teachers_x_academy(
    start DATE DEFAULT CURRENT_TIMESTAMP,
    updated DATE DEFAULT null,
    academy_id INT,
    teacher_id INT,
    PRIMARY KEY(academy_id),
    FOREIGN KEY (academy_id) REFERENCES academies(id),
    FOREIGN KEY (teacher_id) REFERENCES teachers(id)
);

CREATE TABLE IF NOT EXISTS teacher_x_course(
    start DATE DEFAULT CURRENT_TIMESTAMP,
    updated DATE DEFAULT null,
    course_id INT,
    teacher_id INT,
    PRIMARY KEY(teacher_id),
    FOREIGN KEY (course_id) REFERENCES courses(id),
    FOREIGN KEY (teacher_id) REFERENCES teachers(id)
);

DROP TABLE IF EXISTS courses_x_students;
CREATE TABLE IF NOT EXISTS student_x_course(
    start DATE DEFAULT CURRENT_TIMESTAMP,
    updated DATE DEFAULT null,
    course_id INT,
    student_id INT,
    PRIMARY KEY(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(id),
    FOREIGN KEY (student_id) REFERENCES students(id)
);
CREATE TABLE IF NOT EXISTS students_x_academy(
    start DATE DEFAULT CURRENT_TIMESTAMP,
    updated DATE DEFAULT null,
    academy_id INT,
    student_id INT,
    PRIMARY KEY(academy_id),
    FOREIGN KEY (academy_id) REFERENCES academies(id),
    FOREIGN KEY (student_id) REFERENCES students(id)
);
