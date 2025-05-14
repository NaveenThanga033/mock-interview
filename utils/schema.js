import {pgTable, serial,text,varchar} from "drizzle-orm/pg-core";
export const MockInterview=pgTable('mockInterview',{
    id:serial('id').primaryKey(),
    jsonMockResp: text('jsonMockResp').notNull(),
    jobPosition: text('jobPosition').notNull(),
    jobDesc:varchar('jobDesc').notNull(),
    jobExperience:varchar('jobExperience').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt'),
    mockId:varchar('mockId').notNull()
})

export const UserAnswer=pgTable('userAnswer',{
    id:serial('id').primaryKey(),
    mockId:varchar('mockId').notNull(),
    question:varchar('question').notNull(),
    correctAns:text('correctAns').notNull(),
    userAns:text('userAns').notNull(),
    feedback:text('feedback').notNull(),
    rating:varchar('rating').notNull(),
    userEmail:varchar('userEmail').notNull(),
    createdAt:varchar('createdAt'),
})