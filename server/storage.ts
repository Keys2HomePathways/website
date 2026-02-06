import { users, type User, type InsertUser } from "@shared/schema";
import { contactInquiries, type ContactInquiry, type InsertContactInquiry } from "@shared/schema";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
}

// Mock storage for development without database
export class MockStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    console.log(`Mock: Getting user ${id}`);
    return undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    console.log(`Mock: Getting user by username ${username}`);
    return undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    console.log(`Mock: Creating user`, insertUser);
    return {
      id: "mock-user-id",
      username: insertUser.username,
      password: insertUser.password,
    };
  }

  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    console.log(`Mock: Creating contact inquiry`, inquiry);
    return {
      id: 1,
      name: inquiry.name,
      email: inquiry.email,
      message: inquiry.message,
      createdAt: new Date(),
    };
  }
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const { db } = await import("./db");
    const { eq } = await import("drizzle-orm");
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const { db } = await import("./db");
    const { eq } = await import("drizzle-orm");
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const { db } = await import("./db");
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const { db } = await import("./db");
    const [newInquiry] = await db.insert(contactInquiries).values(inquiry).returning();
    return newInquiry;
  }
}

// Use mock storage if DATABASE_URL is not set
export const storage = process.env.DATABASE_URL
  ? new DatabaseStorage()
  : new MockStorage();
