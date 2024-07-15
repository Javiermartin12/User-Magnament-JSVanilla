entity TrainingTechnicalSheet {
    TrainingName: string
    UnitsServices: list<UnitService>
    TrainingPlan: Document
    Version: string
    TypeOfTraining: list<TrainingType>
    Duration: map<TrainingType, integer> // Duration in hours for each type
    EvaluationType: map<TrainingType, EvaluationType>
    Objectives: string
    Contents: string
    Comments: string
    Students: list<Role>
    TheoreticalInstructors: list<Role>
    Instructors: list<Role>
    Assessors: list<Role>
    Survey: string // URL or QR code image
}

entity UnitService {
    id: integer
    name: string
}

entity Role {
    id: integer
    name: string
}

entity TrainingType {
    id: integer
    name: string
    // Values: A, B, C, D
}

entity EvaluationType {
    id: integer
    name: string
    // Values: TA, TB, TC
}

entity Document {
    id: integer
    name: string
    file: binary
}

entity Convocation {
    TrainingName: TrainingTechnicalSheet
    UnitService: UnitService
    StartDate: datetime
    EndDate: datetime
    CommunicateDaysBefore: integer
    Timetable: string
    TheoreticalInstructor: list<User>
    Instructors: list<User>
    Assessor: list<User>
}

entity User {
    id: integer
    name: string
    roles: list<Role>
    unitService: UnitService
}

