import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";
  import bcrypt from 'bcrypt'
  
  @Index("user_pkey", ["id"], { unique: true })
  @Entity("user", { schema: "public" })
  export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column("character varying", { name: "first_name", nullable: true })
    firstName: string | null;
  
    @Column("character varying", { name: "last_name", nullable: true })
    lastName: string | null;
  
    @Column("date", { name: "dob", nullable: true })
    dob: string | null;
  
    @Column("character varying", { name: "id_card", nullable: true })
    idCard: string | null;
  
    @Column("character varying", { name: "id_card_s3_key", nullable: true })
    idCardS3Key: string | null;
  
    @Column("character varying", { name: "phone", nullable: true })
    phone: string | null;
  
    @Column("character varying", { name: "phone_secondary", nullable: true })
    phoneSecondary: string | null;
  
    @Column("character varying", { name: "email", nullable: true })
    email: string | null;
  
    @Column("character varying", { name: "user_name", nullable: true })
    userName: string | null;
  
    @Column("character varying", { name: "password", nullable: true })
    password: string | null;
  
    @Column("character varying", { name: "address_line_one", nullable: true })
    addressLineOne: string | null;
  
    @Column("character varying", { name: "address_line_two", nullable: true })
    addressLineTwo: string | null;
  
    @Column("character varying", { name: "street", nullable: true })
    street: string | null;
  
    @Column("character varying", { name: "location", nullable: true })
    location: string | null;
  
    @Column("character varying", { name: "city", nullable: true })
    city: string | null;
  
    @Column("character varying", { name: "country", nullable: true })
    country: string | null;
  
    @Column("character varying", { name: "post_code", nullable: true })
    postCode: string | null;
  
    @Column("character varying", { name: "photo", nullable: true })
    photo: string | null;
  
    @Column("character varying", { name: "photo_s3_key", nullable: true })
    photoS3Key: string | null;
  
    @Column("text", { name: "token", array: true, nullable: true })
    token: string[] | null;
  
    @Column("character varying", {
      name: "status",
      default: "Active",
    })
    status: string | null;
  
    @OneToOne(() => User)
    @JoinColumn([{ name: "created_id", referencedColumnName: "id" }])
    created: User;
  
    @OneToOne(() => User)
    @JoinColumn([{ name: "updated_id", referencedColumnName: "id" }])
    updated: User;
  
    @CreateDateColumn()
    createdAt: Date | null;
  
    @UpdateDateColumn()
    updatedAt: Date | null;
  
    
  
    @BeforeInsert()
    async hashPassword() {
      this.password = this.password ? await bcrypt.hash(this.password, 10) : null;
    }
  
    @BeforeUpdate()
    async hashPasswordOnUpdate() {
      this.password = this.password ? await bcrypt.hash(this.password, 10) : null;
    }
  }
  