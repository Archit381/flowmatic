import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

type Props = {
  name: string;
  description: string;
  id: string;
  publish: boolean | null;
};

const Workflow = (props: Props) => {
  return (
    <Card className="flex w-full item-center justify-between">
      <CardHeader className="flex flex-col gap-4">
        <Link href={`/workflows/editor/${props.id}`}>
          <div className="flex flex-row gap-2">
            <Image
              src="/googleDrive.png"
              alt="Google Drive"
              height={30}
              width={30}
              className="object-contain"
            />
            <Image
              src="/notion.png"
              alt="Notion"
              height={30}
              width={30}
              className="object-contain"
            />
            <Image
              src="/discord.png"
              alt="Discord"
              height={30}
              width={30}
              className="object-contain"
            />
          </div>
          <div className="">
                <CardTitle className="text-lg">{props.name}</CardTitle>
                <CardDescription>{props.description}</CardDescription>
          </div>
        </Link>
      </CardHeader>

      <div className="flex flex-col items-center gap-2 p-4">
        <Label
          htmlFor="airplane-mode"
          className="text-muted-foreground"
          >
          On
        </Label>
        <Switch id='airplane-mode'/>
      </div>
    </Card>
  );
};

export default Workflow;
