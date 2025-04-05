import type { Config } from 'jest'
import nextJest from 'next/jest.js'
import { createDefaultPreset } from 'ts-jest'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config: Config = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  bail: true,
  preset: "ts-jest",
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  roots: ["<rootDir>/app"],
  // Add more setup options before each test is run
  ...createDefaultPreset(),
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)