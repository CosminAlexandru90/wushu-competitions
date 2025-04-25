CREATE TABLE `competition`
(
    `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `start_date` DATE NOT NULL,
    `end_date` DATE NOT NULL,
    `type` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `judge`
(
    `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(20),
    `club` VARCHAR(255),
    PRIMARY KEY (`id`)
);

CREATE TABLE `athlete`
(
    `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(20),
    `club` VARCHAR(255),
    `duan` VARCHAR(20),
    PRIMARY KEY (`id`)
);

CREATE TABLE `coach`
(
    `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(20),
    `club` VARCHAR(255),
    `duan` VARCHAR(20),
    PRIMARY KEY (`id`)
);

CREATE TABLE `event`
(
    `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `age_group` VARCHAR(20) NOT NULL,
    `gender` ENUM('male', 'female') NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `evaluation`
(
    `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
    `competition_id` BIGINT(20) NOT NULL,
    `athlete_id` BIGINT(20) NOT NULL,
    `event_id` BIGINT(20) NOT NULL,
    `deductions` DECIMAL(5,2) NOT NULL,
    `notes` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (competition_id) REFERENCES competition(id),
    FOREIGN KEY (athlete_id) REFERENCES athlete(id),
    FOREIGN KEY (event_id) REFERENCES event(id)
);

CREATE TABLE `score`
(
    `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
    `evaluation_id` BIGINT(20) NOT NULL,
    `judge_id` BIGINT(20) NOT NULL,
    `score` DECIMAL(5,2) NOT NULL,
    `is_head_judge` BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`evaluation_id`) REFERENCES evaluation(id),
    FOREIGN KEY (`judge_id`) REFERENCES judge(id)
);