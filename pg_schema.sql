--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Events; Type: TABLE; Schema: public; Owner: diparo
--

CREATE TABLE public."Events" (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    start timestamp with time zone NOT NULL,
    "end" timestamp with time zone NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public."Events" OWNER TO diparo;

--
-- Name: Events_id_seq; Type: SEQUENCE; Schema: public; Owner: diparo
--

CREATE SEQUENCE public."Events_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Events_id_seq" OWNER TO diparo;

--
-- Name: Events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: diparo
--

ALTER SEQUENCE public."Events_id_seq" OWNED BY public."Events".id;


--
-- Name: Tasks; Type: TABLE; Schema: public; Owner: diparo
--

CREATE TABLE public."Tasks" (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text,
    completed boolean DEFAULT false,
    "userId" integer NOT NULL
);


ALTER TABLE public."Tasks" OWNER TO diparo;

--
-- Name: Tasks_id_seq; Type: SEQUENCE; Schema: public; Owner: diparo
--

CREATE SEQUENCE public."Tasks_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Tasks_id_seq" OWNER TO diparo;

--
-- Name: Tasks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: diparo
--

ALTER SEQUENCE public."Tasks_id_seq" OWNED BY public."Tasks".id;


--
-- Name: Users; Type: TABLE; Schema: public; Owner: diparo
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    age integer,
    gender character varying(255)
);


ALTER TABLE public."Users" OWNER TO diparo;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: diparo
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Users_id_seq" OWNER TO diparo;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: diparo
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: Events id; Type: DEFAULT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Events" ALTER COLUMN id SET DEFAULT nextval('public."Events_id_seq"'::regclass);


--
-- Name: Tasks id; Type: DEFAULT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Tasks" ALTER COLUMN id SET DEFAULT nextval('public."Tasks_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Name: Events Events_pkey; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Events"
    ADD CONSTRAINT "Events_pkey" PRIMARY KEY (id);


--
-- Name: Tasks Tasks_pkey; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Tasks"
    ADD CONSTRAINT "Tasks_pkey" PRIMARY KEY (id);


--
-- Name: Users Users_email_key; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key" UNIQUE (email);


--
-- Name: Users Users_email_key1; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key1" UNIQUE (email);


--
-- Name: Users Users_email_key10; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key10" UNIQUE (email);


--
-- Name: Users Users_email_key100; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key100" UNIQUE (email);


--
-- Name: Users Users_email_key101; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key101" UNIQUE (email);


--
-- Name: Users Users_email_key102; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key102" UNIQUE (email);


--
-- Name: Users Users_email_key103; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key103" UNIQUE (email);


--
-- Name: Users Users_email_key104; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key104" UNIQUE (email);


--
-- Name: Users Users_email_key105; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key105" UNIQUE (email);


--
-- Name: Users Users_email_key106; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key106" UNIQUE (email);


--
-- Name: Users Users_email_key107; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key107" UNIQUE (email);


--
-- Name: Users Users_email_key108; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key108" UNIQUE (email);


--
-- Name: Users Users_email_key109; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key109" UNIQUE (email);


--
-- Name: Users Users_email_key11; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key11" UNIQUE (email);


--
-- Name: Users Users_email_key110; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key110" UNIQUE (email);


--
-- Name: Users Users_email_key111; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key111" UNIQUE (email);


--
-- Name: Users Users_email_key112; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key112" UNIQUE (email);


--
-- Name: Users Users_email_key113; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key113" UNIQUE (email);


--
-- Name: Users Users_email_key114; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key114" UNIQUE (email);


--
-- Name: Users Users_email_key115; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key115" UNIQUE (email);


--
-- Name: Users Users_email_key116; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key116" UNIQUE (email);


--
-- Name: Users Users_email_key117; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key117" UNIQUE (email);


--
-- Name: Users Users_email_key118; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key118" UNIQUE (email);


--
-- Name: Users Users_email_key119; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key119" UNIQUE (email);


--
-- Name: Users Users_email_key12; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key12" UNIQUE (email);


--
-- Name: Users Users_email_key120; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key120" UNIQUE (email);


--
-- Name: Users Users_email_key121; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key121" UNIQUE (email);


--
-- Name: Users Users_email_key122; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key122" UNIQUE (email);


--
-- Name: Users Users_email_key123; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key123" UNIQUE (email);


--
-- Name: Users Users_email_key124; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key124" UNIQUE (email);


--
-- Name: Users Users_email_key125; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key125" UNIQUE (email);


--
-- Name: Users Users_email_key126; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key126" UNIQUE (email);


--
-- Name: Users Users_email_key127; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key127" UNIQUE (email);


--
-- Name: Users Users_email_key128; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key128" UNIQUE (email);


--
-- Name: Users Users_email_key129; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key129" UNIQUE (email);


--
-- Name: Users Users_email_key13; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key13" UNIQUE (email);


--
-- Name: Users Users_email_key130; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key130" UNIQUE (email);


--
-- Name: Users Users_email_key131; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key131" UNIQUE (email);


--
-- Name: Users Users_email_key132; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key132" UNIQUE (email);


--
-- Name: Users Users_email_key133; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key133" UNIQUE (email);


--
-- Name: Users Users_email_key134; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key134" UNIQUE (email);


--
-- Name: Users Users_email_key135; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key135" UNIQUE (email);


--
-- Name: Users Users_email_key136; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key136" UNIQUE (email);


--
-- Name: Users Users_email_key137; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key137" UNIQUE (email);


--
-- Name: Users Users_email_key138; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key138" UNIQUE (email);


--
-- Name: Users Users_email_key139; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key139" UNIQUE (email);


--
-- Name: Users Users_email_key14; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key14" UNIQUE (email);


--
-- Name: Users Users_email_key140; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key140" UNIQUE (email);


--
-- Name: Users Users_email_key141; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key141" UNIQUE (email);


--
-- Name: Users Users_email_key142; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key142" UNIQUE (email);


--
-- Name: Users Users_email_key143; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key143" UNIQUE (email);


--
-- Name: Users Users_email_key144; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key144" UNIQUE (email);


--
-- Name: Users Users_email_key145; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key145" UNIQUE (email);


--
-- Name: Users Users_email_key146; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key146" UNIQUE (email);


--
-- Name: Users Users_email_key147; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key147" UNIQUE (email);


--
-- Name: Users Users_email_key148; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key148" UNIQUE (email);


--
-- Name: Users Users_email_key149; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key149" UNIQUE (email);


--
-- Name: Users Users_email_key15; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key15" UNIQUE (email);


--
-- Name: Users Users_email_key150; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key150" UNIQUE (email);


--
-- Name: Users Users_email_key151; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key151" UNIQUE (email);


--
-- Name: Users Users_email_key152; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key152" UNIQUE (email);


--
-- Name: Users Users_email_key153; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key153" UNIQUE (email);


--
-- Name: Users Users_email_key154; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key154" UNIQUE (email);


--
-- Name: Users Users_email_key155; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key155" UNIQUE (email);


--
-- Name: Users Users_email_key156; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key156" UNIQUE (email);


--
-- Name: Users Users_email_key157; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key157" UNIQUE (email);


--
-- Name: Users Users_email_key158; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key158" UNIQUE (email);


--
-- Name: Users Users_email_key159; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key159" UNIQUE (email);


--
-- Name: Users Users_email_key16; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key16" UNIQUE (email);


--
-- Name: Users Users_email_key160; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key160" UNIQUE (email);


--
-- Name: Users Users_email_key161; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key161" UNIQUE (email);


--
-- Name: Users Users_email_key162; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key162" UNIQUE (email);


--
-- Name: Users Users_email_key163; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key163" UNIQUE (email);


--
-- Name: Users Users_email_key164; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key164" UNIQUE (email);


--
-- Name: Users Users_email_key165; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key165" UNIQUE (email);


--
-- Name: Users Users_email_key166; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key166" UNIQUE (email);


--
-- Name: Users Users_email_key167; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key167" UNIQUE (email);


--
-- Name: Users Users_email_key168; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key168" UNIQUE (email);


--
-- Name: Users Users_email_key169; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key169" UNIQUE (email);


--
-- Name: Users Users_email_key17; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key17" UNIQUE (email);


--
-- Name: Users Users_email_key170; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key170" UNIQUE (email);


--
-- Name: Users Users_email_key171; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key171" UNIQUE (email);


--
-- Name: Users Users_email_key172; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key172" UNIQUE (email);


--
-- Name: Users Users_email_key173; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key173" UNIQUE (email);


--
-- Name: Users Users_email_key174; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key174" UNIQUE (email);


--
-- Name: Users Users_email_key175; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key175" UNIQUE (email);


--
-- Name: Users Users_email_key176; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key176" UNIQUE (email);


--
-- Name: Users Users_email_key177; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key177" UNIQUE (email);


--
-- Name: Users Users_email_key178; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key178" UNIQUE (email);


--
-- Name: Users Users_email_key179; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key179" UNIQUE (email);


--
-- Name: Users Users_email_key18; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key18" UNIQUE (email);


--
-- Name: Users Users_email_key180; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key180" UNIQUE (email);


--
-- Name: Users Users_email_key181; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key181" UNIQUE (email);


--
-- Name: Users Users_email_key182; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key182" UNIQUE (email);


--
-- Name: Users Users_email_key183; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key183" UNIQUE (email);


--
-- Name: Users Users_email_key184; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key184" UNIQUE (email);


--
-- Name: Users Users_email_key185; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key185" UNIQUE (email);


--
-- Name: Users Users_email_key186; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key186" UNIQUE (email);


--
-- Name: Users Users_email_key187; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key187" UNIQUE (email);


--
-- Name: Users Users_email_key188; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key188" UNIQUE (email);


--
-- Name: Users Users_email_key189; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key189" UNIQUE (email);


--
-- Name: Users Users_email_key19; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key19" UNIQUE (email);


--
-- Name: Users Users_email_key190; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key190" UNIQUE (email);


--
-- Name: Users Users_email_key191; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key191" UNIQUE (email);


--
-- Name: Users Users_email_key192; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key192" UNIQUE (email);


--
-- Name: Users Users_email_key193; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key193" UNIQUE (email);


--
-- Name: Users Users_email_key2; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key2" UNIQUE (email);


--
-- Name: Users Users_email_key20; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key20" UNIQUE (email);


--
-- Name: Users Users_email_key21; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key21" UNIQUE (email);


--
-- Name: Users Users_email_key22; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key22" UNIQUE (email);


--
-- Name: Users Users_email_key23; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key23" UNIQUE (email);


--
-- Name: Users Users_email_key24; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key24" UNIQUE (email);


--
-- Name: Users Users_email_key25; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key25" UNIQUE (email);


--
-- Name: Users Users_email_key26; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key26" UNIQUE (email);


--
-- Name: Users Users_email_key27; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key27" UNIQUE (email);


--
-- Name: Users Users_email_key28; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key28" UNIQUE (email);


--
-- Name: Users Users_email_key29; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key29" UNIQUE (email);


--
-- Name: Users Users_email_key3; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key3" UNIQUE (email);


--
-- Name: Users Users_email_key30; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key30" UNIQUE (email);


--
-- Name: Users Users_email_key31; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key31" UNIQUE (email);


--
-- Name: Users Users_email_key32; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key32" UNIQUE (email);


--
-- Name: Users Users_email_key33; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key33" UNIQUE (email);


--
-- Name: Users Users_email_key34; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key34" UNIQUE (email);


--
-- Name: Users Users_email_key35; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key35" UNIQUE (email);


--
-- Name: Users Users_email_key36; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key36" UNIQUE (email);


--
-- Name: Users Users_email_key37; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key37" UNIQUE (email);


--
-- Name: Users Users_email_key38; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key38" UNIQUE (email);


--
-- Name: Users Users_email_key39; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key39" UNIQUE (email);


--
-- Name: Users Users_email_key4; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key4" UNIQUE (email);


--
-- Name: Users Users_email_key40; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key40" UNIQUE (email);


--
-- Name: Users Users_email_key41; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key41" UNIQUE (email);


--
-- Name: Users Users_email_key42; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key42" UNIQUE (email);


--
-- Name: Users Users_email_key43; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key43" UNIQUE (email);


--
-- Name: Users Users_email_key44; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key44" UNIQUE (email);


--
-- Name: Users Users_email_key45; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key45" UNIQUE (email);


--
-- Name: Users Users_email_key46; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key46" UNIQUE (email);


--
-- Name: Users Users_email_key47; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key47" UNIQUE (email);


--
-- Name: Users Users_email_key48; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key48" UNIQUE (email);


--
-- Name: Users Users_email_key49; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key49" UNIQUE (email);


--
-- Name: Users Users_email_key5; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key5" UNIQUE (email);


--
-- Name: Users Users_email_key50; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key50" UNIQUE (email);


--
-- Name: Users Users_email_key51; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key51" UNIQUE (email);


--
-- Name: Users Users_email_key52; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key52" UNIQUE (email);


--
-- Name: Users Users_email_key53; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key53" UNIQUE (email);


--
-- Name: Users Users_email_key54; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key54" UNIQUE (email);


--
-- Name: Users Users_email_key55; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key55" UNIQUE (email);


--
-- Name: Users Users_email_key56; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key56" UNIQUE (email);


--
-- Name: Users Users_email_key57; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key57" UNIQUE (email);


--
-- Name: Users Users_email_key58; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key58" UNIQUE (email);


--
-- Name: Users Users_email_key59; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key59" UNIQUE (email);


--
-- Name: Users Users_email_key6; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key6" UNIQUE (email);


--
-- Name: Users Users_email_key60; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key60" UNIQUE (email);


--
-- Name: Users Users_email_key61; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key61" UNIQUE (email);


--
-- Name: Users Users_email_key62; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key62" UNIQUE (email);


--
-- Name: Users Users_email_key63; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key63" UNIQUE (email);


--
-- Name: Users Users_email_key64; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key64" UNIQUE (email);


--
-- Name: Users Users_email_key65; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key65" UNIQUE (email);


--
-- Name: Users Users_email_key66; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key66" UNIQUE (email);


--
-- Name: Users Users_email_key67; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key67" UNIQUE (email);


--
-- Name: Users Users_email_key68; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key68" UNIQUE (email);


--
-- Name: Users Users_email_key69; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key69" UNIQUE (email);


--
-- Name: Users Users_email_key7; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key7" UNIQUE (email);


--
-- Name: Users Users_email_key70; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key70" UNIQUE (email);


--
-- Name: Users Users_email_key71; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key71" UNIQUE (email);


--
-- Name: Users Users_email_key72; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key72" UNIQUE (email);


--
-- Name: Users Users_email_key73; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key73" UNIQUE (email);


--
-- Name: Users Users_email_key74; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key74" UNIQUE (email);


--
-- Name: Users Users_email_key75; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key75" UNIQUE (email);


--
-- Name: Users Users_email_key76; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key76" UNIQUE (email);


--
-- Name: Users Users_email_key77; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key77" UNIQUE (email);


--
-- Name: Users Users_email_key78; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key78" UNIQUE (email);


--
-- Name: Users Users_email_key79; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key79" UNIQUE (email);


--
-- Name: Users Users_email_key8; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key8" UNIQUE (email);


--
-- Name: Users Users_email_key80; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key80" UNIQUE (email);


--
-- Name: Users Users_email_key81; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key81" UNIQUE (email);


--
-- Name: Users Users_email_key82; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key82" UNIQUE (email);


--
-- Name: Users Users_email_key83; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key83" UNIQUE (email);


--
-- Name: Users Users_email_key84; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key84" UNIQUE (email);


--
-- Name: Users Users_email_key85; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key85" UNIQUE (email);


--
-- Name: Users Users_email_key86; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key86" UNIQUE (email);


--
-- Name: Users Users_email_key87; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key87" UNIQUE (email);


--
-- Name: Users Users_email_key88; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key88" UNIQUE (email);


--
-- Name: Users Users_email_key89; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key89" UNIQUE (email);


--
-- Name: Users Users_email_key9; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key9" UNIQUE (email);


--
-- Name: Users Users_email_key90; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key90" UNIQUE (email);


--
-- Name: Users Users_email_key91; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key91" UNIQUE (email);


--
-- Name: Users Users_email_key92; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key92" UNIQUE (email);


--
-- Name: Users Users_email_key93; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key93" UNIQUE (email);


--
-- Name: Users Users_email_key94; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key94" UNIQUE (email);


--
-- Name: Users Users_email_key95; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key95" UNIQUE (email);


--
-- Name: Users Users_email_key96; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key96" UNIQUE (email);


--
-- Name: Users Users_email_key97; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key97" UNIQUE (email);


--
-- Name: Users Users_email_key98; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key98" UNIQUE (email);


--
-- Name: Users Users_email_key99; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key99" UNIQUE (email);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: Events Events_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Events"
    ADD CONSTRAINT "Events_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Tasks Tasks_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: diparo
--

ALTER TABLE ONLY public."Tasks"
    ADD CONSTRAINT "Tasks_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

